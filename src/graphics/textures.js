import * as THREE from 'three';

// Helper to create crisp pixel textures (64x64)
function createPixelTexture(width, height, drawCallback) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  drawCallback(ctx, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.generateMipmaps = true;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function generateTextures() {
  // --- 1. PLAINS BIOME ---
  const grassTop = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#4ea42a'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#429023';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const grassSide = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#866043'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#735137';
    for (let i = 0; i < w; i += 8) for (let j = 12; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
    ctx.fillStyle = '#4ea42a'; ctx.fillRect(0, 0, w, 12);
  });
  const dirt = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#866043'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#735137';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const cobblestone = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#777777'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#555555'; ctx.fillRect(0, 0, w, 4); ctx.fillRect(0, 0, 4, h);
    ctx.fillStyle = '#999999'; ctx.fillRect(0, h - 4, w, 4); ctx.fillRect(w - 4, 0, 4, h);
  });
  const wood = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#674d31'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#523c24'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(24, 0, 8, h); ctx.fillRect(48, 0, 8, h);
  });
  const leaves = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#2d8527'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#22661d';
    for (let i = 0; i < w; i += 16) for (let j = 0; j < h; j += 16) if ((i + j) % 32 === 0) ctx.fillRect(i, j, 16, 16);
  });

  // --- 2. DESERT BIOME ---
  const sandTop = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#dbd3a0'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#c2ba86';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const sandstone = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#d6ca98'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#b8aa76'; ctx.fillRect(0, 28, w, 8);
  });
  const cactusWood = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#176b1d'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#0f4f13'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(24, 0, 8, h); ctx.fillRect(48, 0, 8, h);
  });

  // --- 3. SNOW BIOME ---
  const snowTop = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#f0f5fb'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d8e5f2';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const snowSide = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#866043'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f0f5fb'; ctx.fillRect(0, 0, w, 16);
  });
  const spruceWood = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#3b291a'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#26190e'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(24, 0, 8, h); ctx.fillRect(48, 0, 8, h);
  });
  const snowLeaves = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#225533'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f0f5fb'; ctx.fillRect(0, 0, w, 12);
  });

  // --- 4. CHERRY BLOSSOM BIOME ---
  const blossomTop = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#e88bad'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d66e93';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const blossomSide = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#4a2c1d'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#e88bad'; ctx.fillRect(0, 0, w, 12);
  });
  const cherryWood = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#4a2c1d'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#331c11'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(24, 0, 8, h);
  });
  const cherryLeaves = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#ffb7d5'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#f28eb9';
    for (let i = 0; i < w; i += 16) for (let j = 0; j < h; j += 16) if ((i + j) % 32 === 0) ctx.fillRect(i, j, 16, 16);
  });

  // --- 5. SAVANNA / ACACIA BIOME ---
  const savannaTop = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#9e9738'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#87802b';
    for (let i = 0; i < w; i += 8) for (let j = 0; j < h; j += 8) if ((i + j) % 16 === 0) ctx.fillRect(i, j, 8, 8);
  });
  const acaciaWood = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#615b53'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#47423c'; ctx.fillRect(0, 0, 8, h); ctx.fillRect(24, 0, 8, h);
  });
  const acaciaLeaves = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#7a8c24'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#5f6e19';
    for (let i = 0; i < w; i += 16) for (let j = 0; j < h; j += 16) if ((i + j) % 32 === 0) ctx.fillRect(i, j, 16, 16);
  });

  // --- GENERAL COLLECTIBLES ---
  const brick = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#b04030'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#e8e0d8'; ctx.fillRect(0, 30, w, 4); ctx.fillRect(16, 0, 4, 30); ctx.fillRect(32, 32, 4, 30);
  });
  const coin = createPixelTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#ffaa00'; ctx.fillRect(8, 8, 48, 48);
    ctx.fillStyle = '#ffdd44'; ctx.fillRect(12, 12, 40, 40);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(16, 16, 12, 12);
  });

  return {
    plains: { top: grassTop, side: grassSide, dirt: dirt, border: cobblestone, wood: wood, leaves: leaves, sky: 0x87ceeb },
    desert: { top: sandTop, side: sandTop, dirt: sandstone, border: sandstone, wood: cactusWood, leaves: cactusWood, sky: 0xedd68a },
    snow: { top: snowTop, side: snowSide, dirt: dirt, border: cobblestone, wood: spruceWood, leaves: snowLeaves, sky: 0xafd2eb },
    blossom: { top: blossomTop, side: blossomSide, dirt: dirt, border: sandstone, wood: cherryWood, leaves: cherryLeaves, sky: 0xfce4ec },
    savanna: { top: savannaTop, side: savannaTop, dirt: dirt, border: cobblestone, wood: acaciaWood, leaves: acaciaLeaves, sky: 0xf5b942 },
    brick,
    coin
  };
}
