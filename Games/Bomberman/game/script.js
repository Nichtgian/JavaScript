let canvas = document.getElementById('world');
let world = canvas.getContext('2d');
let playerSize = 50;
const map = new World(100, canvas.width);
const player1 = new Player(0, 0, 2, map.blockSize / 100 * playerSize);
const player2 = new Player(map.sizePixel - (map.blockSize / 100 * playerSize), map.sizePixel - (map.blockSize / 100 * playerSize), 2, map.blockSize / 100 * playerSize);

setInterval( () => {
  world.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawPlayer();
  movePlayer();
}, 40);

function drawMap() {
  for (var line in map.map) {
    for (var block in map.map[line]) {
      if (map.map[line][block] == e_blockShape.EMPTY) {
        world.fillStyle = 'rgba(0, 0, 0, 0.0)'; /*COLOR EMPTY BLOCK*/
        world.fillRect(line * map.blockSize, block * map.blockSize, map.blockSize, map.blockSize);
      }
      if (map.map[line][block] == e_blockShape.DESTRUCTIBLE) {
        world.fillStyle = 'rgba(0, 0, 0, 0.5)'; /*COLOR DESTRUCTIBLE BLOCK*/
        world.fillRect(line * map.blockSize, block * map.blockSize, map.blockSize, map.blockSize);
      }
      if (map.map[line][block] == e_blockShape.INDESTRUCTIBLE) {
        world.fillStyle = 'rgba(0, 0, 0, 1)'; /*COLOR INDESTRUCTIBLE BLOCK*/
        world.fillRect(line * map.blockSize, block * map.blockSize, map.blockSize, map.blockSize);
      }
    }
  }
}
function drawPlayer() {
  world.fillStyle = 'blue';
  world.fillRect(player1.xCoordinate, player1.yCoordinate, player1.size, player1.size);
  world.fillRect(player2.xCoordinate, player2.yCoordinate, player2.size, player2.size);
}
function movePlayer() {
  for (var i = 1; i <= 2; i++) {
    let p = eval("player" + i);
    let pBlock = [];
    if (p.ySpeed == -p.speed) { /*DIRECTION UP*/
      if (map.isSolid((Math.floor(p.xCoordinate / map.blockSize)), (Math.floor(p.yCoordinate / map.blockSize)) - 1)) {
        if ( (p.yCoordinate - p.speed) < 0) { /*BORDER UPSIDE*/
          p.yCoordinate = 0;
          break;
        }
        if ( (p.yCoordinate - p.speed) < ((Math.floor(p.yCoordinate / map.blockSize)) * map.blockSize)) {
          p.yCoordinate = (Math.floor(p.yCoordinate / map.blockSize)) * map.blockSize;
          break;
        }
      }
    }
    if (p.ySpeed == p.speed) { /*DIRECTION DOWN*/
      if (map.isSolid((Math.floor(p.xCoordinate / map.blockSize)), (Math.floor(p.yCoordinate / map.blockSize)) + 1)) {
        if ( (p.yCoordinate + p.speed) > map.sizePixel - p.size) { /*BORDER DOWNSIDE*/
          p.yCoordinate = map.sizePixel - p.size;
          break;
        }
        if ( (p.yCoordinate + p.speed) > ((Math.floor(p.yCoordinate / map.blockSize)) * map.blockSize + p.size)) {
          p.yCoordinate = (Math.floor(p.yCoordinate / map.blockSize)) * map.blockSize + p.size;
          break;
        }
        if ( ((p.xCoordinate + p.size) / map.blockSize) == )
      }
    }
    if (p.xSpeed == -p.speed) { /*DIRECTION LEFT*/
      if (map.isSolid((Math.floor(p.xCoordinate / map.blockSize) - 1), (Math.floor(p.yCoordinate / map.blockSize)))) {
        if ( (p.xCoordinate - p.speed) < 0) { /*BORDER LEFTSIDE*/
          p.xCoordinate = 0;
          break;
        }
        if ( (p.xCoordinate - p.speed) < ((Math.floor(p.xCoordinate / map.blockSize)) * map.blockSize)) {
          p.xCoordinate = (Math.floor(p.xCoordinate / map.blockSize)) * map.blockSize;
          break;
        }
      }
    }
    if (p.xSpeed == p.speed) { /*DIRECTION RIGHT*/
      if (map.isSolid((Math.floor(p.xCoordinate / map.blockSize) + 1), (Math.floor(p.yCoordinate / map.blockSize)))) {
        if ( (p.xCoordinate + p.speed) > map.sizePixel - p.size) { /*BORDER RIGHTSIDE*/
          p.xCoordinate = map.sizePixel - p.size;
          break;
        }
        if ( (p.xCoordinate + p.speed) > ((Math.floor(p.xCoordinate / map.blockSize)) * map.blockSize + p.size)) {
          p.xCoordinate = (Math.floor(p.xCoordinate / map.blockSize)) * map.blockSize + p.size;
          break;
        }
      }
    }
    p.xCoordinate += p.xSpeed;
    p.yCoordinate += p.ySpeed;
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 87: //W - UP
      player1.moveUp(player1.speed);
      break;
    case 83: //S - DOWN
      player1.moveDown(player1.speed);
      break;
    case 65: //A - LEFT
      player1.moveLeft(player1.speed);
      break;
    case 68: //D - RIGHT
      player1.moveRight(player1.speed);
      break;
    case 38: //ARROWKEY - UP
      player2.moveUp(player2.speed);
      break;
    case 40: //ARROWKEY - DOWN
      player2.moveDown(player2.speed);
      break;
    case 37: //ARROWKEY - LEFT
      player2.moveLeft(player2.speed);
      break;
    case 39: //ARROWKEY - RIGHT
      player2.moveRight(player2.speed);
      break;
  }
}
document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 87: //W - UP
      player1.moveUp(0);
      break;
    case 83: //S - DOWN
      player1.moveDown(0);
      break;
    case 65: //A - LEFT
      player1.moveLeft(0);
      break;
    case 68: //D - RIGHT
      player1.moveRight(0);
      break;
    case 38: //ARROWKEY - UP
      player2.moveUp(0);
      break;
    case 40: //ARROWKEY - DOWN
      player2.moveDown(0);
      break;
    case 37: //ARROWKEY - LEFT
      player2.moveLeft(0);
      break;
    case 39: //ARROWKEY - RIGHT
      player2.moveRight(0);
      break;
  }
}
