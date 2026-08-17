import * as THREE from 'three';

export class BloodParticleSystem {
  constructor(parentGroup) {
    this.parentGroup = parentGroup;
    this.particles = [];
    this.bloodMat = new THREE.MeshBasicMaterial({ color: 0xaa0000 });
    this.bloodGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    this.spawnTimer = 0;
  }

  reset() {
    this.particles.forEach(p => this.parentGroup.remove(p.mesh));
    this.particles = [];
    this.spawnTimer = 0;
  }

  update(delta, dangerLevel, playerPos) {
    // 1. Drip blood particles dynamically based on Danger Proximity (0% = no blood, 100% = heavy drip)
    if (dangerLevel > 0.05) {
      // Spawn rate scales with danger level
      const spawnInterval = Math.max(0.03, 0.25 - dangerLevel * 0.2);
      this.spawnTimer += delta;

      if (this.spawnTimer >= spawnInterval) {
        this.spawnTimer = 0;
        this.spawnBloodDrip(playerPos);
      }
    }

    // 2. Animate active blood particles (drip down & shrink)
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= delta;
      p.mesh.position.y -= delta * 3.0; // Gravity drip
      p.mesh.scale.multiplyScalar(0.95); // Shrink

      if (p.life <= 0 || p.mesh.position.y <= 0) {
        this.parentGroup.remove(p.mesh);
        this.particles.splice(i, 1);
      }
    }
  }

  spawnBloodDrip(playerPos) {
    const mesh = new THREE.Mesh(this.bloodGeo, this.bloodMat);
    // Position near player's torso with small random offset
    const offsetX = (Math.random() - 0.5) * 0.4;
    const offsetY = 0.5 + (Math.random() - 0.5) * 0.4;
    const offsetZ = (Math.random() - 0.5) * 0.3;

    mesh.position.set(playerPos.x + offsetX, playerPos.y + offsetY, playerPos.z + offsetZ);
    this.parentGroup.add(mesh);

    this.particles.push({
      mesh: mesh,
      life: 0.6 + Math.random() * 0.4
    });
  }
}
