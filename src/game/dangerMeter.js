export class DangerMeter {
  constructor() {
    this.value = 0; // 0.0 to 1.0 (0% to 100%)
    this.fillElem = document.getElementById('danger-bar-inner');
  }

  reset() {
    this.value = 0;
    this.updateHUD();
  }

  addDanger(amount) {
    this.value = Math.min(1.0, this.value + amount);
    this.updateHUD();
  }

  update(delta) {
    if (this.value > 0) {
      // Natural decay over time (-4% per sec)
      this.value = Math.max(0, this.value - 0.04 * delta);
      this.updateHUD();
    }
  }

  updateHUD() {
    if (this.fillElem) {
      const percentage = Math.floor(this.value * 100);
      this.fillElem.style.width = `${percentage}%`;
    }
  }

  isMax() {
    return this.value >= 0.99;
  }
}
