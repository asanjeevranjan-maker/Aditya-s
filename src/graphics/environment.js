import * as THREE from 'three';

export class EnvironmentManager {
  constructor(scene, textures) {
    this.scene = scene;
    this.textures = textures;

    // Build Material Cache per Biome
    this.biomeMaterials = {};
    const biomes = ['plains', 'desert', 'snow', 'blossom', 'savanna'];

    biomes.forEach(b => {
      const tex = textures[b];
      const sideMat = new THREE.MeshLambertMaterial({ map: tex.side });
      const topMat = new THREE.MeshLambertMaterial({ map: tex.top });
      const dirtMat = new THREE.MeshLambertMaterial({ map: tex.dirt });

      const blockMats = [sideMat, sideMat, topMat, dirtMat, sideMat, sideMat];

      this.biomeMaterials[b] = {
        blockMats,
        borderMat: new THREE.MeshLambertMaterial({ map: tex.border }),
        dirtMat: dirtMat,
        woodMat: new THREE.MeshLambertMaterial({ map: tex.wood }),
        leafMat: new THREE.MeshLambertMaterial({ map: tex.leaves, transparent: true, alphaTest: 0.2 }),
        skyColor: tex.sky
      };
    });

    this.brickMat = new THREE.MeshLambertMaterial({ map: textures.brick });
    this.coinMat = new THREE.MeshStandardMaterial({
      map: textures.coin,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xffaa00,
      emissiveIntensity: 0.4
    });

    this.setupLighting();
  }

  setupLighting() {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x55a02e, 0.85);
    this.scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(30, 45, 30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 120;
    dirLight.shadow.camera.left = -40;
    dirLight.shadow.camera.right = 40;
    dirLight.shadow.camera.top = 40;
    dirLight.shadow.camera.bottom = -40;
    this.scene.add(dirLight);

    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.FogExp2(0x87ceeb, 0.008);
  }

  // Get current biome key based on Z position along path
  getBiomeKey(zPos) {
    const dist = Math.abs(zPos);
    if (dist < 150) return 'plains';
    if (dist < 300) return 'desert';
    if (dist < 450) return 'snow';
    if (dist < 600) return 'blossom';
    return 'savanna';
  }

  // Create a 3D track chunk with dynamic biomes and STRICT lane clearance (NO ghost blocks!)
  createChunk(zOffset) {
    const chunkGroup = new THREE.Group();
    chunkGroup.position.z = zOffset;

    const biomeKey = this.getBiomeKey(zOffset);
    const bm = this.biomeMaterials[biomeKey];

    const blockGeo = new THREE.BoxGeometry(1, 1, 1);
    const chunkLength = 30;

    let totalGrassCount = 0;
    let totalCobbleCount = 0;
    let totalDirtCount = 0;

    for (let z = 0; z < chunkLength; z++) {
      for (let x = -30; x <= 30; x++) {
        const absX = Math.abs(x);
        if (absX <= 3) {
          totalGrassCount++;
        } else if (absX === 4) {
          totalCobbleCount++;
        } else {
          const distFromTrack = absX - 4;
          const height = Math.min(10, Math.floor(Math.sin((x * 0.4) + (z * 0.2)) * 2 + distFromTrack * 0.35 + 1));
          totalGrassCount++;
          totalDirtCount += Math.max(0, height);
        }
      }
    }

    const grassMesh = new THREE.InstancedMesh(blockGeo, bm.blockMats, totalGrassCount);
    grassMesh.receiveShadow = true;
    grassMesh.castShadow = true;

    const cobbleMesh = new THREE.InstancedMesh(blockGeo, bm.borderMat, totalCobbleCount);
    cobbleMesh.receiveShadow = true;

    const dirtMesh = new THREE.InstancedMesh(blockGeo, bm.dirtMat, totalDirtCount);
    dirtMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    let gIdx = 0, cIdx = 0, dIdx = 0;

    for (let z = 0; z < chunkLength; z++) {
      for (let x = -30; x <= 30; x++) {
        const absX = Math.abs(x);

        if (absX <= 3) {
          // STRICT RUNNING TRACK (-3 to +3): Clean flat surface, NO stray blocks
          dummy.position.set(x, -0.5, -z);
          dummy.updateMatrix();
          grassMesh.setMatrixAt(gIdx++, dummy.matrix);
        } else if (absX === 4) {
          // Cobblestone / Border blocks at x = -4 and +4
          dummy.position.set(x, -0.5, -z);
          dummy.updateMatrix();
          cobbleMesh.setMatrixAt(cIdx++, dummy.matrix);
        } else {
          // Mountainous Terrain starting strictly at |x| >= 5
          const distFromTrack = absX - 4;
          const height = Math.min(10, Math.floor(Math.sin((x * 0.4) + (z * 0.2)) * 2 + distFromTrack * 0.35 + 1));

          dummy.position.set(x, -0.5 + height, -z);
          dummy.updateMatrix();
          grassMesh.setMatrixAt(gIdx++, dummy.matrix);

          for (let y = 0; y < height; y++) {
            dummy.position.set(x, -0.5 + y, -z);
            dummy.updateMatrix();
            dirtMesh.setMatrixAt(dIdx++, dummy.matrix);
          }
        }
      }

      // Add Trees strictly on mountainsides (|x| >= 7) to avoid any leaf overhang into the running track!
      if (z % 8 === 0) {
        const treeXLeft = -7 - Math.floor(Math.random() * 6);
        const treeXRight = 7 + Math.floor(Math.random() * 6);

        const hL = Math.min(10, Math.floor(Math.sin((treeXLeft * 0.4) + (z * 0.2)) * 2 + (Math.abs(treeXLeft) - 4) * 0.35 + 1));
        const hR = Math.min(10, Math.floor(Math.sin((treeXRight * 0.4) + (z * 0.2)) * 2 + (Math.abs(treeXRight) - 4) * 0.35 + 1));

        this.addTree(chunkGroup, treeXLeft, -z, -0.5 + hL, bm);
        this.addTree(chunkGroup, treeXRight, -z, -0.5 + hR, bm);
      }
    }

    grassMesh.instanceMatrix.needsUpdate = true;
    cobbleMesh.instanceMatrix.needsUpdate = true;
    dirtMesh.instanceMatrix.needsUpdate = true;

    chunkGroup.add(grassMesh);
    chunkGroup.add(cobbleMesh);
    chunkGroup.add(dirtMesh);

    chunkGroup.userData = { biomeKey };
    return chunkGroup;
  }

  addTree(parentGroup, x, z, baseY, bm) {
    const blockGeo = new THREE.BoxGeometry(1, 1, 1);

    // Trunk
    for (let y = 1; y <= 3; y++) {
      const trunk = new THREE.Mesh(blockGeo, bm.woodMat);
      trunk.position.set(x, baseY + y, z);
      trunk.castShadow = true;
      parentGroup.add(trunk);
    }

    // Leaves Canopy strictly contained
    for (let lx = -1; lx <= 1; lx++) {
      for (let ly = 3; ly <= 4; ly++) {
        for (let lz = -1; lz <= 1; lz++) {
          if (lx === 0 && lz === 0 && ly === 3) continue;
          const leaf = new THREE.Mesh(blockGeo, bm.leafMat);
          leaf.position.set(x + lx, baseY + ly, z + lz);
          leaf.castShadow = true;
          parentGroup.add(leaf);
        }
      }
    }
  }

  // Create low hurdle obstacle (Must JUMP) - Precisely scaled for 1 lane (Width: 2.0)
  createLowObstacle(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0.4, z);

    const geo = new THREE.BoxGeometry(1.9, 0.8, 0.4);
    const mesh = new THREE.Mesh(geo, this.brickMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    group.userData = { type: 'LOW', bboxHeight: 0.8, bboxWidth: 1.9 };
    return group;
  }

  // Create high overhead arch obstacle (Must SLIDE) - Perfectly aligned to 1 lane
  createHighObstacle(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const pillarGeo = new THREE.BoxGeometry(0.3, 3.0, 0.3);
    const beamGeo = new THREE.BoxGeometry(2.0, 0.7, 0.4);

    const pillarL = new THREE.Mesh(pillarGeo, this.brickMat);
    pillarL.position.set(-0.95, 1.5, 0);

    const pillarR = new THREE.Mesh(pillarGeo, this.brickMat);
    pillarR.position.set(0.95, 1.5, 0);

    const beam = new THREE.Mesh(beamGeo, this.brickMat);
    beam.position.set(0, 2.2, 0);

    pillarL.castShadow = true;
    pillarR.castShadow = true;
    beam.castShadow = true;

    group.add(pillarL);
    group.add(pillarR);
    group.add(beam);

    group.userData = { type: 'HIGH', minHeight: 1.5, bboxWidth: 1.9 };
    return group;
  }

  // Create full lane wall blockade (Must SWITCH LANES) - Perfectly fitted to 1 lane
  createWallBlockade(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 1.25, z);

    const geo = new THREE.BoxGeometry(1.95, 2.5, 0.5);
    const mesh = new THREE.Mesh(geo, this.brickMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    group.userData = { type: 'WALL', bboxHeight: 2.5, bboxWidth: 1.95 };
    return group;
  }

  // Create spinning Gold Coin collectible
  createCoin(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0.8, z);

    const geo = new THREE.BoxGeometry(0.4, 0.4, 0.1);
    const coinMesh = new THREE.Mesh(geo, this.coinMat);
    coinMesh.castShadow = true;
    group.add(coinMesh);

    group.userData = { type: 'COIN', radius: 0.5, mesh: coinMesh };
    return group;
  }
}
