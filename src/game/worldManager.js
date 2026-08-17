import * as THREE from 'three';
import { EnvironmentManager } from '../graphics/environment.js';
import { VoxelZombie } from '../graphics/zombieModel.js';

export class WorldManager {
  constructor(scene, textures) {
    this.scene = scene;
    this.env = new EnvironmentManager(scene, textures);

    this.chunks = [];
    this.obstacles = [];
    this.coins = [];
    this.zombies = [];

    this.chunkLength = 30;
    this.nextChunkZ = 60;

    this.lanes = [-2.5, 0, 2.5];
  }

  reset() {
    this.chunks.forEach(c => this.scene.remove(c));
    this.chunks = [];

    this.obstacles.forEach(o => this.scene.remove(o));
    this.obstacles = [];

    this.coins.forEach(c => this.scene.remove(c));
    this.coins = [];

    this.zombies.forEach(z => this.scene.remove(z.group));
    this.zombies = [];

    this.nextChunkZ = 60;

    for (let i = 0; i < 10; i++) {
      this.spawnChunk(i >= 4);
    }
  }

  spawnChunk(withObjects = true) {
    const chunk = this.env.createChunk(this.nextChunkZ);
    this.scene.add(chunk);
    this.chunks.push(chunk);

    if (withObjects) {
      this.populateChunk(this.nextChunkZ);
    }

    this.nextChunkZ -= this.chunkLength;
  }

  populateChunk(chunkZ) {
    // 1. Spawn Standard Hurdles (Low, High, Wall)
    const obstacleCount = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < obstacleCount; i++) {
      const zPos = chunkZ - (6 + i * 10 + Math.random() * 3);
      const laneIndex = Math.floor(Math.random() * 3);
      const laneX = this.lanes[laneIndex];

      const typeRand = Math.random();
      let obstacle;

      if (typeRand < 0.4) {
        obstacle = this.env.createLowObstacle(laneX, zPos);
      } else if (typeRand < 0.75) {
        obstacle = this.env.createHighObstacle(laneX, zPos);
      } else {
        obstacle = this.env.createWallBlockade(laneX, zPos);
      }

      this.scene.add(obstacle);
      this.obstacles.push(obstacle);
    }

    // 2. Spawn Incoming Minecraft Zombies
    if (Math.random() > 0.25) {
      const zombieLane = this.lanes[Math.floor(Math.random() * 3)];
      const zombieZ = chunkZ - (10 + Math.random() * 15);

      const zombie = new VoxelZombie();
      zombie.group.position.set(zombieLane, 0, zombieZ);
      zombie.speed = 3.5 + Math.random() * 2.0;

      this.scene.add(zombie.group);
      this.zombies.push(zombie);
    }

    // 3. Spawn Coin Chains
    const coinChainCount = 1 + Math.floor(Math.random() * 2);
    for (let c = 0; c < coinChainCount; c++) {
      const coinLane = this.lanes[Math.floor(Math.random() * 3)];
      const startZ = chunkZ - (4 + Math.random() * 15);
      const coinLength = 3 + Math.floor(Math.random() * 4);

      for (let k = 0; k < coinLength; k++) {
        const coin = this.env.createCoin(coinLane, startZ - k * 1.8);
        this.scene.add(coin);
        this.coins.push(coin);
      }
    }
  }

  update(playerPos, delta, hardnessLevel = 1) {
    // 1. Chunk recycling
    if (this.chunks.length > 0) {
      const oldestChunk = this.chunks[0];
      if (oldestChunk.position.z > playerPos.z + 80) {
        this.scene.remove(oldestChunk);
        this.chunks.shift();
        this.spawnChunk(true);
      }
    }

    // 2. REQUIREMENT: Update Zombies and make them DYNAMICALLY TRACK player's lane position!
    for (let i = this.zombies.length - 1; i >= 0; i--) {
      const z = this.zombies[i];
      // Shambling forward in Z
      z.group.position.z += (z.speed + (hardnessLevel - 1) * 1.0) * delta;

      // Track player X position if zombie is ahead of player
      if (z.group.position.z < playerPos.z) {
        const trackingSpeed = 1.8 + hardnessLevel * 0.4;
        z.group.position.x += (playerPos.x - z.group.position.x) * Math.min(delta * trackingSpeed, 1.0);
      }

      z.animate(playerPos.z * 0.05);

      // Cleanup passed zombies
      if (z.group.position.z > playerPos.z + 30) {
        this.scene.remove(z.group);
        this.zombies.splice(i, 1);
      }
    }

    // 3. Animate and recycle coins
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      if (coin.userData.mesh) {
        coin.userData.mesh.rotation.y += delta * 4;
      }
      if (coin.position.z > playerPos.z + 30) {
        this.scene.remove(coin);
        this.coins.splice(i, 1);
      }
    }

    // 4. Cleanup passed obstacles
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obstacle = this.obstacles[i];
      if (obstacle.position.z > playerPos.z + 30) {
        this.scene.remove(obstacle);
        this.obstacles.splice(i, 1);
      }
    }
  }

  // Check collision between player and obstacles / zombies
  checkObstacleCollisions(player) {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obs = this.obstacles[i];
      const type = obs.userData.type;
      const op = obs.position;
      const pp = player.position;

      const distZ = Math.abs(op.z - pp.z);
      const distX = Math.abs(op.x - pp.x);

      if (distZ < 0.8 && distX < 0.9) {
        if (type === 'LOW') {
          if (pp.y < 0.6) {
            this.scene.remove(obs);
            this.obstacles.splice(i, 1);
            return { type: 'COLLISION_LOW', penalty: 0.35 };
          }
        } else if (type === 'HIGH') {
          if (player.state !== 'SLIDING') {
            this.scene.remove(obs);
            this.obstacles.splice(i, 1);
            return { type: 'COLLISION_HIGH', penalty: 0.35 };
          }
        } else if (type === 'WALL') {
          this.scene.remove(obs);
          this.obstacles.splice(i, 1);
          return { type: 'COLLISION_WALL', penalty: 0.35 };
        }
      }
    }

    // Check Incoming Zombies (+15% Danger penalty)
    for (let i = 0; i < this.zombies.length; i++) {
      const z = this.zombies[i];
      const zp = z.group.position;
      const pp = player.position;

      const distZ = Math.abs(zp.z - pp.z);
      const distX = Math.abs(zp.x - pp.x);

      if (distZ < 0.8 && distX < 0.9 && pp.y < 0.8) {
        this.scene.remove(z.group);
        this.zombies.splice(i, 1);
        return { type: 'COLLISION_ZOMBIE', penalty: 0.15 };
      }
    }

    return null;
  }

  // Check collision with coin pickups
  checkCoinPickups(playerPos) {
    let collectedCount = 0;

    for (let i = this.coins.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      const dist = coin.position.distanceTo(playerPos);

      if (dist < 1.2) {
        this.scene.remove(coin);
        this.coins.splice(i, 1);
        collectedCount++;
      }
    }

    return collectedCount;
  }
}
