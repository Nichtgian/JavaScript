let canvas = document.getElementById('world');
let world = canvas.getContext('2d');

const map = new World();
//const player1 = new Player(30, 0, 45);
//const player2 = new Player(150, 0, 60);
//const player3 = new Player(300, 0, 75);
const player1 = new Player(450, 0, 100);
//const player5 = new Player(610, 0, 150);
let playerCount = 1;

setInterval( () => {
  world.clearRect(0, 0, canvas.width, canvas.height);
  renderPlayer();
  calcGravity();
}, 20);

function renderPlayer() {
  world.fillStyle = "black";
  for (var i = 1; i <= playerCount; i++) {
    let p = eval("player" + i);
    world.fillRect(p.x, p.y, p.size, p.size);
  }
}

function calcGravity() {
  for (var i = 1; i <= playerCount; i++) {
    let p = eval("player" + i);
    p.y -= p.bounce;
    if (!p.touchGround()) {
      p.gravity = p.gravity + (p.mass * map.gravity);
      p.y += p.ySpeed + p.gravity;
    }
    if (p.y + (p.ySpeed + p.gravity) > canvas.height - p.size){
      p.ySpeed = 0;
      p.y = canvas.height - p.size;
      p.gravity = 0;
      p.bounce = 0;
    }
    
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 32 ) {
    for (var i = 1; i <= playerCount; i++) {
      let p = eval("player" + i);
      p.bounce = 30;
    }
  }
}
