class Player {
  constructor(x, y, direction, size) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.fov = 90;
    this.speed = 1;
    this.size = size;
  }
  searchWall(angle, p, m) {
    let wallFound = false;
    let distance = 0;
    do {
      wallFound = true;
    } while (!wallFound);
    return distance
  }
  moveForward() {
    this.x += Math.sin(toRadians(this.direction)) * this.speed;
    this.y -= Math.cos(toRadians(this.direction)) * this.speed;
    if (this.inWall()) {
      this.direction += 180;
      this.x += Math.sin(toRadians(this.direction)) * this.speed;
      this.y -= Math.cos(toRadians(this.direction)) * this.speed;
      this.direction -= 180;
    }
  }
  inWall() {
    return ((map.level[Math.floor(this.x / 10)][Math.floor(this.y / 10)] == e_Block.SOLID) || (map.level[Math.floor((this.x + this.size) / 10)][Math.floor((this.y + this.size) / 10)] == e_Block.SOLID));
  }
}
function toDegrees(angle) {
  return angle * (180 / Math.PI);
}
function toRadians(angle) {
  return angle * (Math.PI / 180);
}
