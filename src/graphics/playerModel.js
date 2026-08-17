import * as THREE from 'three';

export class VoxelPlayer {
  constructor() {
    this.group = new THREE.Group();

    // High Quality Crisp Materials (Image 1 Reference)
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe2b490, roughness: 0.5 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x422a19, roughness: 0.6 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x1d5c58, roughness: 0.4 }); // Dark teal shirt
    const jeansMat = new THREE.MeshStandardMaterial({ color: 0x2b4c7e, roughness: 0.5 }); // Blue denim jeans
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.3 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // 1. Torso
    this.torso = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.78, 0.36), shirtMat);
    this.torso.position.y = 0.9;
    this.torso.castShadow = true;
    this.group.add(this.torso);

    // 2. Head & Hair
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.52, 0);

    const headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.42), skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // Short Brown Hair Top & Side bangs
    const hairMesh = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.16, 0.45), hairMat);
    hairMesh.position.set(0, 0.16, 0);
    this.headGroup.add(hairMesh);

    const hairFront = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.1), hairMat);
    hairFront.position.set(0, 0.14, 0.2);
    this.headGroup.add(hairFront);

    // Eyes with White Sclera
    const eyeLWhite = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), eyeWhiteMat);
    eyeLWhite.position.set(-0.1, 0.03, 0.215);
    const eyeLPupil = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.02), eyeMat);
    eyeLPupil.position.set(-0.1, 0.03, 0.216);

    const eyeRWhite = eyeLWhite.clone();
    eyeRWhite.position.x = 0.1;
    const eyeRPupil = eyeLPupil.clone();
    eyeRPupil.position.x = 0.1;

    this.headGroup.add(eyeLWhite);
    this.headGroup.add(eyeLPupil);
    this.headGroup.add(eyeRWhite);
    this.headGroup.add(eyeRPupil);

    this.torso.add(this.headGroup);

    // 3. Arms
    this.leftArm = this.createArm(skinMat, shirtMat);
    this.leftArm.position.set(-0.41, 0.3, 0);
    this.torso.add(this.leftArm);

    this.rightArm = this.createArm(skinMat, shirtMat);
    this.rightArm.position.set(0.41, 0.3, 0);
    this.torso.add(this.rightArm);

    // 4. Legs
    this.leftLeg = this.createLeg(jeansMat, shoeMat);
    this.leftLeg.position.set(-0.17, 0.5, 0);
    this.group.add(this.leftLeg);

    this.rightLeg = this.createLeg(jeansMat, shoeMat);
    this.rightLeg.position.set(0.17, 0.5, 0);
    this.group.add(this.rightLeg);
  }

  createArm(skinMat, shirtMat) {
    const armGroup = new THREE.Group();
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.26, 0.22), shirtMat);
    sleeve.position.y = -0.13;
    sleeve.castShadow = true;
    armGroup.add(sleeve);

    const lowerArm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.36, 0.18), skinMat);
    lowerArm.position.y = -0.42;
    lowerArm.castShadow = true;
    armGroup.add(lowerArm);

    return armGroup;
  }

  createLeg(jeansMat, shoeMat) {
    const legGroup = new THREE.Group();
    const pants = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.44, 0.22), jeansMat);
    pants.position.y = -0.22;
    pants.castShadow = true;
    legGroup.add(pants);

    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.15, 0.28), shoeMat);
    shoe.position.set(0, -0.46, 0.03);
    shoe.castShadow = true;
    legGroup.add(shoe);

    return legGroup;
  }

  // Animate character limbs based on state & wounded effect
  animate(delta, state, animTime, isWounded = false) {
    if (state === 'SLIDING') {
      this.group.rotation.x = -Math.PI * 0.4;
      this.group.position.y = 0.3;
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = Math.PI * 0.3;
      this.rightArm.rotation.x = Math.PI * 0.3;
      return;
    }

    this.group.rotation.x = 0;
    this.group.rotation.z = 0;

    if (state === 'JUMPING') {
      this.leftLeg.rotation.x = -Math.PI * 0.3;
      this.rightLeg.rotation.x = Math.PI * 0.2;
      this.leftArm.rotation.x = -Math.PI * 0.6;
      this.rightArm.rotation.x = -Math.PI * 0.6;
    } else if (state === 'STUMBLE') {
      const wobble = Math.sin(animTime * 30) * 0.4;
      this.group.rotation.z = wobble;
      this.leftArm.rotation.z = 1.2;
      this.rightArm.rotation.z = -1.2;
    } else if (state === 'DEFEAT') {
      this.group.rotation.x = Math.PI * 0.5;
      this.group.position.y = 0.2;
    } else {
      const swing = Math.sin(animTime * 14);

      if (isWounded) {
        // Wounded limping gait (leaning to one side, uneven leg swings)
        this.group.rotation.z = -0.15; // Lean left
        this.leftLeg.rotation.x = swing * 0.4;
        this.rightLeg.rotation.x = -swing * 0.9; // Favored leg
        this.leftArm.rotation.x = -swing * 0.3;
        this.rightArm.rotation.x = swing * 0.3;
        this.headGroup.position.y = 0.52 + Math.abs(Math.sin(animTime * 14)) * 0.06;
      } else {
        this.leftLeg.rotation.x = swing * 0.7;
        this.rightLeg.rotation.x = -swing * 0.7;
        this.leftArm.rotation.x = -swing * 0.7;
        this.rightArm.rotation.x = swing * 0.7;
        this.headGroup.position.y = 0.52 + Math.abs(Math.sin(animTime * 14)) * 0.03;
      }
    }
  }
}
