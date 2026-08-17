import * as THREE from 'three';
import { VoxelGranny } from '../graphics/grannyModel.js';

export class GrannyController {
  constructor(scene) {
    this.scene = scene;
    this.model = new VoxelGranny();
    this.scene.add(this.model.group);

    this.position = new THREE.Vector3(0, 0, 12);
    this.animTime = 0;
    this.isAttacking = false;
    this.model.group.visible = false; // Hidden until 1/4th (25%) proximity
  }

  reset() {
    this.position.set(0, 0, 12);
    this.animTime = 0;
    this.isAttacking = false;
    this.model.group.visible = false;
    this.model.group.position.set(0, 0, 12);
  }

  update(delta, playerPos, dangerLevel, isGameOver) {
    this.animTime += delta;

    if (isGameOver) {
      this.isAttacking = true;
      this.model.group.visible = true;
      // Close in right next to player for bat swing attack
      this.position.x = playerPos.x;
      this.position.y = playerPos.y;
      this.position.z += (playerPos.z + 0.8 - this.position.z) * Math.min(delta * 14, 1.0);
    } else {
      this.isAttacking = false;

      // Granny becomes visible and approaches starting at 1/4th (25% = 0.25) proximity!
      if (dangerLevel >= 0.25) {
        this.model.group.visible = true;

        // Dynamic close approach: at 25% (5.5m behind), at 100% (1.0m behind right at player's back!)
        const normalizedDanger = (dangerLevel - 0.25) / 0.75;
        const targetDistance = 5.5 - normalizedDanger * 4.5;

        const targetZ = playerPos.z + targetDistance;
        const targetX = playerPos.x;

        this.position.z += (targetZ - this.position.z) * Math.min(delta * 10.0, 1.0);
        this.position.x += (targetX - this.position.x) * Math.min(delta * 12.0, 1.0);
        this.position.y = playerPos.y;
      } else {
        // Keep hidden in distance fog when under 25% proximity
        this.model.group.visible = false;
        this.position.set(playerPos.x, playerPos.y, playerPos.z + 18);
      }
    }

    this.model.group.position.copy(this.position);
    this.model.animate(delta, this.animTime, this.isAttacking);
  }
}
