import * as THREE from 'three';
import { generateTextures } from './graphics/textures.js';
import { PlayerController } from './game/player.js';
import { GrannyController } from './game/granny.js';
import { WorldManager } from './game/worldManager.js';
import { DangerMeter } from './game/dangerMeter.js';
import { InputManager } from './game/controls.js';
import { SoundManager } from './audio/soundManager.js';

class GameApp {
  constructor() {
    this.gameState = 'START'; // START, PLAYING, PAUSED, GAME_OVER

    // DOM Elements
    this.container = document.getElementById('game-container');
    this.hudElem = document.getElementById('hud');
    this.startScreen = document.getElementById('start-screen');
    this.pauseScreen = document.getElementById('pause-screen');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.levelToast = document.getElementById('level-toast');

    this.hudCoins = document.getElementById('hud-coins');
    this.hudScore = document.getElementById('hud-score');
    this.hudHighScore = document.getElementById('hud-highscore');
    this.hudLevel = document.getElementById('hud-level');

    this.goDistance = document.getElementById('go-distance');
    this.goCoins = document.getElementById('go-coins');
    this.goScore = document.getElementById('go-score');
    this.goHighScore = document.getElementById('go-highscore');

    // High Score Persistence
    this.highScore = parseInt(localStorage.getItem('blockrun_highscore') || '0', 10);
    this.hudHighScore.innerText = this.highScore;

    // 1. Three.js Setup with VSync & High Performance
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 200);
    
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
      precision: "highp"
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 2. Load Textures & Managers
    this.textures = generateTextures();
    this.player = new PlayerController(this.scene);
    this.granny = new GrannyController(this.scene);
    this.world = new WorldManager(this.scene, this.textures);
    this.dangerMeter = new DangerMeter();
    this.input = new InputManager();
    this.sound = new SoundManager();

    // Game Metrics & Hardness Progression
    this.coinsCollected = 0;
    this.baseSpeed = 14.0;
    this.forwardSpeed = 14.0;
    this.maxSpeed = 32.0;
    this.cameraShake = 0;
    this.stepTimer = 0;

    this.playTime = 0;
    this.hardnessLevel = 1;

    // Bind UI & Resize Events
    this.bindEvents();

    // Start render loop
    this.clock = new THREE.Clock();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.getElementById('start-btn').addEventListener('click', () => {
      this.startGame();
    });
    document.getElementById('resume-btn').addEventListener('click', () => {
      this.resumeGame();
    });
    document.getElementById('restart-pause-btn').addEventListener('click', () => {
      this.startGame();
    });
    document.getElementById('restart-btn').addEventListener('click', () => {
      this.startGame();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.gameState === 'PLAYING') this.pauseGame();
        else if (this.gameState === 'PAUSED') this.resumeGame();
      }
    });
  }

  startGame() {
    this.gameState = 'PLAYING';
    this.coinsCollected = 0;
    this.baseSpeed = 14.0;
    this.forwardSpeed = 14.0;
    this.cameraShake = 0;
    this.playTime = 0;
    this.hardnessLevel = 1;

    this.player.reset();
    this.granny.reset();
    this.world.reset();
    this.dangerMeter.reset();
    this.input.clear();

    // UI Updates
    this.startScreen.classList.add('hidden');
    this.pauseScreen.classList.add('hidden');
    this.gameOverScreen.classList.add('hidden');
    this.hudElem.classList.remove('hidden');

    this.hudLevel.innerText = '1';
    this.updateHUD(0, 0);
  }

  pauseGame() {
    if (this.gameState === 'PLAYING') {
      this.gameState = 'PAUSED';
      this.pauseScreen.classList.remove('hidden');
    }
  }

  resumeGame() {
    if (this.gameState === 'PAUSED') {
      this.gameState = 'PLAYING';
      this.pauseScreen.classList.add('hidden');
    }
  }

  triggerGameOver() {
    this.gameState = 'GAME_OVER';
    this.sound.playJumpscare();
    this.player.state = 'DEFEAT';

    const distance = Math.floor(Math.abs(this.player.position.z));
    const finalScore = distance * 10 + this.coinsCollected * 100;

    if (finalScore > this.highScore) {
      this.highScore = finalScore;
      localStorage.setItem('blockrun_highscore', this.highScore.toString());
      this.hudHighScore.innerText = this.highScore;
    }

    this.goDistance.innerText = distance.toString();
    this.goCoins.innerText = this.coinsCollected.toString();
    this.goScore.innerText = finalScore.toString();
    this.goHighScore.innerText = this.highScore.toString();

    setTimeout(() => {
      this.gameOverScreen.classList.remove('hidden');
      this.hudElem.classList.add('hidden');
    }, 1200);
  }

  updateHUD(distance, score) {
    this.hudCoins.innerText = this.coinsCollected.toString();
    this.hudScore.innerText = score.toString();
    this.hudLevel.innerText = this.hardnessLevel.toString();
  }

  animate() {
    requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.05);

    if (this.gameState === 'PLAYING') {
      // 1. Hardness Level Progression Timer (Increases every 60 seconds / 1 minute)
      this.playTime += delta;
      const newLevel = 1 + Math.floor(this.playTime / 60);

      if (newLevel > this.hardnessLevel) {
        this.hardnessLevel = newLevel;
        this.baseSpeed += 3.0; // Increase base run speed with each hardness level

        // Trigger Level Toast Banner
        if (this.levelToast) {
          this.levelToast.innerText = `HARDNESS INCREASED: LEVEL ${this.hardnessLevel}!`;
          this.levelToast.classList.remove('hidden');
          this.levelToast.style.animation = 'none';
          void this.levelToast.offsetHeight;
          this.levelToast.style.animation = 'level-toast-pop 2.5s ease-out forwards';
        }
      }

      // 2. Process Controls
      let action = this.input.consumeAction();
      while (action) {
        if (action === 'LEFT') this.player.moveLeft();
        else if (action === 'RIGHT') this.player.moveRight();
        else if (action === 'JUMP') this.player.jump();
        else if (action === 'SLIDE') this.player.slide();
        action = this.input.consumeAction();
      }

      // Forward Speed calculation based on distance and hardness level
      this.forwardSpeed = Math.min(this.maxSpeed, this.baseSpeed + (this.playTime * 0.08));

      // 3. Update Player (pass Danger Meter value so bleeding dynamically scales with proximity!)
      this.player.update(delta, this.forwardSpeed, this.dangerMeter.value);

      // Footstep Audio
      if (this.player.position.y === 0 && this.player.state === 'RUNNING') {
        this.stepTimer += delta;
        if (this.stepTimer > 0.28) {
          this.sound.playStep();
          this.stepTimer = 0;
        }
      }

      // 4. Update Danger Meter Decay
      this.dangerMeter.update(delta);

      // 5. Update World & Tracking Zombies
      this.world.update(this.player.position, delta, this.hardnessLevel);

      // Check Obstacle & Zombie Collisions
      const collision = this.world.checkObstacleCollisions(this.player);
      if (collision) {
        this.player.triggerStumble();
        this.dangerMeter.addDanger(collision.penalty); // +15% for Zombie, +35% for Hurdle/Wall
        this.cameraShake = 0.4;
        this.sound.playStumble();

        if (this.dangerMeter.isMax()) {
          this.triggerGameOver();
        }
      }

      // Check Coin Pickups
      const newCoins = this.world.checkCoinPickups(this.player.position);
      if (newCoins > 0) {
        this.coinsCollected += newCoins;
        this.sound.playCoin();
      }

      // 6. Update Granny AI Chaser (Visible & closer starting at 1/4th proximity)
      this.granny.update(delta, this.player.position, this.dangerMeter.value, false);

      // Dynamic Sky Color & Fog Transition based on Biome Distance
      const currentBiomeKey = this.world.env.getBiomeKey(this.player.position.z);
      const targetSkyHex = this.world.env.biomeMaterials[currentBiomeKey].skyColor;
      this.scene.background.lerp(new THREE.Color(targetSkyHex), delta * 1.5);
      this.scene.fog.color.lerp(new THREE.Color(targetSkyHex), delta * 1.5);

      // 7. Update Camera with smooth jump tracking
      const p = this.player.position;
      let shakeX = (Math.random() - 0.5) * this.cameraShake;
      let shakeY = (Math.random() - 0.5) * this.cameraShake;
      if (this.cameraShake > 0) {
        this.cameraShake = Math.max(0, this.cameraShake - delta * 2.0);
      }

      this.camera.position.set(
        p.x * 0.4 + shakeX,
        Math.max(1.8, p.y * 0.35 + 3.2) + shakeY,
        p.z + 5.8
      );
      this.camera.lookAt(p.x * 0.2, p.y * 0.3 + 1.2, p.z - 4);

      // 8. Update HUD Metrics
      const distance = Math.floor(Math.abs(p.z));
      const score = distance * 10 + this.coinsCollected * 100;
      this.updateHUD(distance, score);

    } else if (this.gameState === 'GAME_OVER') {
      this.granny.update(delta, this.player.position, 1.0, true);

      const p = this.player.position;
      this.camera.position.set(p.x + 0.5, p.y + 1.6, p.z + 2.5);
      this.camera.lookAt(p.x, p.y + 1.2, p.z);

    } else if (this.gameState === 'START') {
      const time = this.clock.getElapsedTime() * 0.2;
      this.camera.position.x = Math.sin(time) * 12;
      this.camera.position.z = Math.cos(time) * 12;
      this.camera.position.y = 6;
      this.camera.lookAt(0, 0, 0);
    }

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new GameApp();
});
