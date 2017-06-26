class Player {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.mass = size / 100 * 0.1;
    this.ySpeed = 0;
    this.xSpeed = 0;
    this.gravity = 0;
    this.bounce = 0;
  }
  touchGround(){
    return (this.y == canvas.height - this.size);
  }
}
