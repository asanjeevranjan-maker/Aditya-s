import * as THREE from 'three';

export class VoxelGranny {
  constructor() {
    this.group = new THREE.Group();

    // High Quality Ominous Materials (Image 2 Reference)
    const gownMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.7 }); // Flowing white nightgown
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xbdb0a4, roughness: 0.6 }); // Pale skin
    const hairMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.9 });
    const batWoodMat = new THREE.MeshStandardMaterial({ color: 0x6e451d, roughness: 0.4 });
    const bloodMat = new THREE.MeshBasicMaterial({ color: 0xaa0000 });
    const glowEyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const darkMouthMat = new THREE.MeshBasicMaterial({ color: 0x180907 });

    // 1. Long White Nightgown Dress
    const gownGeo = new THREE.BoxGeometry(0.78, 1.25, 0.52);
    this.gown = new THREE.Mesh(gownGeo, gownMat);
    this.gown.position.y = 0.95;
    this.gown.castShadow = true;
    this.group.add(this.gown);

    // 2. Head & Hair
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.72, 0);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.48), skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // Messy White Hair Bun
    const hairBun = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.22), hairMat);
    hairBun.position.set(0, 0.16, -0.28);
    this.headGroup.add(hairBun);

    // Dark Sunken Mouth
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.1, 0.04), darkMouthMat);
    mouth.position.set(0, -0.12, 0.23);
    this.headGroup.add(mouth);

    // Hollow Glowing White Eyes
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), glowEyeMat);
    eyeL.position.set(-0.11, 0.06, 0.245);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.11;
    this.headGroup.add(eyeL);
    this.headGroup.add(eyeR);

    this.gown.add(this.headGroup);

    // 3. Arms
    this.leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.68, 0.2), gownMat);
    this.leftArm.position.set(-0.48, 0.2, 0.1);
    this.leftArm.castShadow = true;
    this.gown.add(this.leftArm);

    this.rightArmGroup = new THREE.Group();
    this.rightArmGroup.position.set(0.48, 0.3, 0);

    const rightArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.68, 0.2), gownMat);
    rightArmMesh.position.y = -0.25;
    rightArmMesh.castShadow = true;
    this.rightArmGroup.add(rightArmMesh);

    // 4. Wooden Baseball Bat with Bloody Tip
    this.batGroup = new THREE.Group();
    this.batGroup.position.set(0, -0.55, 0.1);

    const batHandle = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.72, 0.09), batWoodMat);
    batHandle.position.y = -0.2;
    batHandle.castShadow = true;
    this.batGroup.add(batHandle);

    const batTip = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.38, 0.13), bloodMat);
    batTip.position.y = -0.48;
    batTip.castShadow = true;
    this.batGroup.add(batTip);

    this.rightArmGroup.add(this.batGroup);
    this.gown.add(this.rightArmGroup);
  }

  animate(delta, animTime, isAttacking) {
    if (isAttacking) {
      this.rightArmGroup.rotation.x = -Math.PI * 0.85;
      this.rightArmGroup.rotation.y = -Math.PI * 0.35;
      this.headGroup.rotation.x = 0.2;
      return;
    }

    const swing = Math.sin(animTime * 12);
    this.leftArm.rotation.x = swing * 0.8;
    this.rightArmGroup.rotation.x = -swing * 0.8 - 0.2;
    this.rightArmGroup.rotation.z = -0.2;

    this.headGroup.rotation.y = Math.sin(animTime * 3) * 0.15;
    this.gown.rotation.z = Math.sin(animTime * 12) * 0.05;
  }
}
