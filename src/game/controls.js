export class InputManager {
  constructor() {
    this.actionQueue = [];

    // Touch swipe tracking
    this.touchStartX = 0;
    this.touchStartY = 0;

    this.bindEvents();
  }

  bindEvents() {
    // Keyboard Listener
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const key = e.code;

      if (key === 'KeyA' || key === 'ArrowLeft') {
        this.actionQueue.push('LEFT');
      } else if (key === 'KeyD' || key === 'ArrowRight') {
        this.actionQueue.push('RIGHT');
      } else if (key === 'KeyW' || key === 'ArrowUp' || key === 'Space') {
        this.actionQueue.push('JUMP');
      } else if (key === 'KeyS' || key === 'ArrowDown') {
        this.actionQueue.push('SLIDE');
      }
    });

    // Touch Listeners (Mobile Swiping)
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        const deltaX = e.changedTouches[0].clientX - this.touchStartX;
        const deltaY = e.changedTouches[0].clientY - this.touchStartY;

        const absX = Math.abs(deltaX);
        const absY = Math.abs(deltaY);

        const minSwipeDistance = 30;

        if (Math.max(absX, absY) > minSwipeDistance) {
          if (absX > absY) {
            // Horizontal swipe
            if (deltaX < 0) this.actionQueue.push('LEFT');
            else this.actionQueue.push('RIGHT');
          } else {
            // Vertical swipe
            if (deltaY < 0) this.actionQueue.push('JUMP');
            else this.actionQueue.push('SLIDE');
          }
        }
      }
    }, { passive: true });
  }

  consumeAction() {
    return this.actionQueue.shift() || null;
  }

  clear() {
    this.actionQueue = [];
  }
}
