import * as THREE from 'three';
import { VoxelPlayer } from '../graphics/playerModel.js';
import { BloodParticleSystem } from '../graphics/bloodParticles.js';

export class PlayerController {
  constructor(scene) {
    this.scene = scene;
    this.model = new VoxelPlayer();
    this.scene.add(this.model.group);

    // Dynamic Bleeding System
    this.bloodSystem = new BloodParticleSystem(scene);

    // Lane configuration: Left (-2.5), Center (0), Right (2.5)
    this.lanes = [-2.5, 0, 2.5];
    this.currentLane = 1; // Center lane index

    // Position & Velocity
    this.position = new THREE.Vector3(0, 0, 0);
    this.targetX = 0;
    this.vy = 0;
    this.gravity = -34;

    // Movement States
    this.state = 'RUNNING'; // RUNNING, JUMPING, SLIDING, STUMBLE, DEFEAT
    this.slideTimer = 0;
    this.stumbleTimer = 0;
    this.animTime = 0;

    // Bounding Box
    this.bbox = new THREE.Box3();
  }

  reset() {
    this.currentLane = 1;
    this.position.set(0, 0, 0);
    this.targetX = 0;
    this.vy = 0;
    this.state = 'RUNNING';
    this.slideTimer = 0;
    this.stumbleTimer = 0;
    this.animTime = 0;
    this.bloodSystem.reset();
    this.model.group.position.set(0, 0, 0);
    this.model.group.rotation.set(0, 0, 0);
  }

  moveLeft() {
    if (this.state === 'DEFEAT' || this.state === 'STUMBLE') return;
    if (this.currentLane > 0) {
      this.currentLane--;
      this.targetX = this.lanes[this.currentLane];
    }
  }

  moveRight() {
    if (this.state === 'DEFEAT' || this.state === 'STUMBLE') return;
    if (this.currentLane < this.lanes.length - 1) {
      this.currentLane++;
      this.targetX = this.lanes[this.currentLane];
    }
  }

  jump() {
    if (this.state === 'RUNNING' || this.state === 'SLIDING') {
      this.vy = 12.5;
      this.state = 'JUMPING';
      this.slideTimer = 0;
    }
  }

  slide() {
    if (this.state === 'RUNNING') {
      this.state = 'SLIDING';
      this.slideTimer = 0.8;
    }
  }

  triggerStumble() {
    if (this.state !== 'DEFEAT') {
      this.state = 'STUMBLE';
      this.stumbleTimer = 0.4;
    }
  }

  update(delta, forwardSpeed, dangerLevel) {
    this.animTime += delta;

    // Forward Movement along Z axis
    this.position.z -= forwardSpeed * delta;

    // Silky Smooth Lane Lerp
    this.position.x += (this.targetX - this.position.x) * Math.min(delta * 22, 1.0);

    // Vertical Jump & Gravity Logic
    if (this.state === 'JUMPING' || this.position.y > 0) {
      this.vy += this.gravity * delta;
      this.position.y += this.vy * delta;

      if (this.position.y <= 0) {
        this.position.y = 0;
        this.vy = 0;
        if (this.state === 'JUMPING') {
          this.state = 'RUNNING';
        }
      }
    }

    // Slide Timer Update
    if (this.state === 'SLIDING') {
      this.slideTimer -= delta;
      if (this.slideTimer <= 0) {
        this.state = 'RUNNING';
      }
    }

    // Stumble Timer Update
    if (this.state === 'STUMBLE') {
      this.stumbleTimer -= delta;
      if (this.stumbleTimer <= 0) {
        this.state = 'RUNNING';
      }
    }

    // Update 3D Group Position
    this.model.group.position.copy(this.position);

    // Animate Limbs
    this.model.animate(delta, this.state, this.animTime);

    // Update Dynamic Bleeding System (drips scale with dangerLevel)
    this.bloodSystem.update(delta, dangerLevel, this.position);

    // Update Bounding Box
    this.updateBoundingBox();
  }

  updateBoundingBox() {
    const p = this.position;
    const height = (this.state === 'SLIDING') ? 0.5 : 1.6;
    const minY = p.y;

    this.bbox.min.set(p.x - 0.35, minY, p.z - 0.4);
    this.bbox.max.set(p.x + 0.35, minY + height, p.z + 0.4);
  }
}
