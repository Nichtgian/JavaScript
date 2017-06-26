class Player {
  constructor(xCoordinate, yCoordinate, health, size) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.health = health;
    this.size = size;
    this.speed = 15;
  }
  moveUp(Speed) {
    this.ySpeed = -Speed;
  }
  moveDown(Speed) {
    this.ySpeed = Speed;
  }
  moveLeft(Speed) {
    this.xSpeed = -Speed;
  }
  moveRight(Speed) {
    this.xSpeed = Speed;
  }
}
