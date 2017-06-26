class Player {
  constructor(size, mass) {
    this.x = 20;
    this.y = 50;
    this.size = size;
    this.mass = mass;
    this.speed = 0;
    this.gravity = 0;
    this.bounce = 0;
    this.life = 3;
    this.score = 0;
  }
  touchGround(){
    return (this.y == canvas.height - this.size);
  }
}
/*
this.x += this.speed * Math.cos(angle * Math.PI / 180);
this.y += this.speed * Math.sin(angle * Math.PI / 180);
*/
