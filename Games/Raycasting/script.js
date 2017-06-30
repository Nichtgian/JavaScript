let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let canvasMini = document.getElementById('canvas-mini');
let ctxMini = canvasMini.getContext('2d');

let map = new Map(1, 10, 10);
let p = new Player(map.blockSize, map.blockSize, 135, map.blockSize / 2);

onMove();
function onMove() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxMini.clearRect(0, 0, canvasMini.width, canvasMini.width);
  drawGround();
  drawWorld();
  drawMiniMap();
}

function drawMiniMap() {
  for (var xi = 0; xi < map.mapSize; xi++) {
    for (var yi = 0; yi < map.mapSize; yi++) {
      if (map.level[xi][yi] == e_Block.SOLID) {
        ctxMini.fillStyle = "black";
        ctxMini.fillRect(xi * (canvasMini.width / map.mapSize), yi * (canvasMini.width / map.mapSize), canvasMini.width / map.mapSize, canvasMini.width / map.mapSize);
      }
    }
  }
  ctxMini.fillStyle = "red";
  ctxMini.fillRect(p.x, p.y, canvasMini.width / map.mapSize / 2, canvasMini.width / map.mapSize / 2);
  ctxMini.beginPath();
  ctxMini.moveTo(p.x + canvasMini.width / map.mapSize / 4, p.y + canvasMini.width / map.mapSize / 4);
  ctxMini.lineTo(p.x + canvasMini.width / map.mapSize / 4 + 10 * Math.cos(toRadians(p.direction - 90)), p.y + canvasMini.width / map.mapSize / 4 +10 * Math.sin(toRadians(p.direction - 90)));
  ctxMini.stroke();
}

function drawWorld() {
  ctx.fillStyle = "black";
  for (var i = 0; i < p.fov; i += 0.1) {
    let height = 3000 / getDistance(i);
    ctx.fillRect(canvas.width / p.fov * i, canvas.height / 2 - height, canvas.width / p.fov, height + height);
  }
}

function drawGround() {
  ctx.fillStyle = "#e0e0e0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#a0a0a0";
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

function getDistance(angel) {
  angel = p.direction + (-45 + angel);
  distance = 0;
  let x = p.x + canvasMini.width / map.mapSize / 4 + distance * Math.cos(toRadians(angel - 90));
  let y = p.y + canvasMini.width / map.mapSize / 4 + distance * Math.sin(toRadians(angel - 90));
  do {
    x = p.x + canvasMini.width / map.mapSize / 4 + distance * Math.cos(toRadians(angel - 90));
    y = p.y + canvasMini.width / map.mapSize / 4 + distance * Math.sin(toRadians(angel - 90));
    distance += 0.1;
  } while (!inWall(x, y));
  return Math.sqrt(Math.pow(p.x + canvasMini.width / map.mapSize / 4 - x, 2) + Math.pow(p.y + canvasMini.width / map.mapSize / 4 - y, 2));
}

function inWall(x, y) {
  return (map.level[Math.floor(x / 10)][Math.floor(y/ 10)] == e_Block.SOLID);
}

document.onkeydown = function(e) {
  if (e.keyCode == 87) { /*W*/
    p.moveForward();
    onMove();
  }
  if (e.keyCode == 83) { /*S*/
    p.direction += 180;
    p.moveForward();
    p.direction -= 180;
    onMove();
  }
  if (e.keyCode == 68) { /*A*/
    p.direction += 10;
    onMove();
  }
  if (e.keyCode == 65) { /*D*/
    p.direction -= 10;
    onMove();
  }
}
