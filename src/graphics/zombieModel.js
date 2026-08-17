import * as THREE from 'three';

export class VoxelZombie {
  constructor() {
    this.group = new THREE.Group();

    // Minecraft Zombie Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x43763c, roughness: 0.5 }); // Green zombie skin
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x228080, roughness: 0.4 }); // Dark teal shirt
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1d365c, roughness: 0.5 }); // Dark blue pants
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x0a140a });

    // 1. Torso
    this.torso = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.75, 0.35), shirtMat);
    this.torso.position.y = 0.85;
    this.torso.castShadow = true;
    this.group.add(this.torso);

    // 2. Head
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.45, 0);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // Sunken Black Eyes
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeMat);
    eyeL.position.set(-0.1, 0.04, 0.22);
    const eyeR = eyeL.clone();
    eyeR.position.x = 0.1;
    this.headGroup.add(eyeL);
    this.headGroup.add(eyeR);

    this.torso.add(this.headGroup);

    // 3. Outstretched Arms (Classic Zombie Stance)
    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.65, 0.18), skinMat);
    armL.position.set(-0.4, 0.2, 0.25);
    armL.rotation.x = -Math.PI * 0.48; // Reaching forward
    armL.castShadow = true;
    this.torso.add(armL);

    const armR = armL.clone();
    armR.position.x = 0.4;
    this.torso.add(armR);

    // 4. Legs
    const legL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.55, 0.22), pantsMat);
    legL.position.set(-0.16, 0.28, 0);
    legL.castShadow = true;
    this.group.add(legL);

    const legR = legL.clone();
    legR.position.x = 0.16;
    this.group.add(legR);
  }

  animate(animTime) {
    // Subtle zombie shambling motion
    this.group.rotation.z = Math.sin(animTime * 6) * 0.05;
    this.headGroup.rotation.y = Math.sin(animTime * 3) * 0.1;
  }
}
