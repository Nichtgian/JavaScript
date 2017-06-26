class Obstacle {
  constructor(space, minHeight, maxHeight) {
    this.height = this.getHeight(minHeight, maxHeight);
    this.space = this.getSpace(space);
    this.width = this.getWidth();
    this.x = canvas.width + canvas.width + canvas.width;
    this.speed = 10;
    this.hit = false;
    this.canHit = true;
  }
  getHeight(minHeight, maxHeight) {
    return Math.floor(Math.random() * maxHeight) + minHeight;
  }
  getSpace(space)  {
    return Math.floor(Math.random() * 400) + space;
  }
  getWidth() {
    return Math.floor(Math.random() * 200) + 70;
  }
}
