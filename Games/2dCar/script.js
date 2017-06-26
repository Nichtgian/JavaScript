var c = document.getElementById("playGround");
var ctx = c.getContext("2d");
var levelCount = 0;
var roadImg = new Image();
roadImg.onload = function () {
    ctx.drawImage(roadImg, 0, 0, 600, 600);
    ctx.drawImage(roadImg, 0, 600, 600, 600);
    ctx.drawImage(playerCarImg, 220, 700, 150, 150);
    ctx.fillText("Spacebar", 250, 500);
}
roadImg.src = "road.jpg";
var playerCarImg = new Image();
playerCarImg.src = "playerCarImg.png";

ctx.fillStyle = "white";
ctx.font="20px Arial";
var opponentCar1 = new Image();
opponentCar1.src = "opponentCar1.png";
var opponentCar2 = new Image();
opponentCar2.src = "opponentCar2.png";
var startGameInt = 0;
document.onkeydown = keyCheck;


var roadY = [600, 0, -600];
var roadSpeed = 15;

function drawRoad() {
  for (var i = 0; i < 3; i++) {
    roadY[i] += roadSpeed;
  }
  ctx.drawImage(roadImg, 0, roadY[0], 600, 600);
  ctx.drawImage(roadImg, 0, roadY[1], 600, 600);
  ctx.drawImage(roadImg, 0, roadY[2], 600, 600);

  for (var i = 0; i < 3; i++) {
    if (roadY[i] >= 1200) {
      roadY[i] = -600;
    }
  }
}


var playerX = 220;
var playerY = 700;

function drawPlayer() {
    playerX += playerSpeedX;
    playerY += playerSpeedY;
    ctx.drawImage(playerCarImg, playerX, playerY, 150, 150);
}


var playerSpeedX = 0;
var playerSpeedY = playerSpeedX;
var playerSpeed = 5;

function keyCheck() {
  var keyID = event.keyCode;
    if (keyID == 87 || keyID == 38) {            /*KEY W*/
      playerSpeedY = -playerSpeed;
    }
    else if (keyID == 65 || keyID == 37) {     /*KEY A*/
      playerSpeedX = -playerSpeed;
    }
    else if (keyID == 83 || keyID == 40) {     /*KEY S*/
      playerSpeedY = playerSpeed;
    }
    else if (keyID == 68 || keyID == 39) {     /*KEY D*/
      playerSpeedX = playerSpeed;
    }
    else if (keyID == 32) {
      if (startGameInt == 0) {
        startGameInt = 1;
        intervalGame = window.setInterval(function () {
          levelCount++;
          ctx.clearRect(0, 0, c.width, c.height);
          drawRoad();
          drawPlayer();
          drawOpponent();
          death();
          score();
        }, 20);
      }
      else if (startGameInt == 1) {
          ctx.font="50px Arial";
          ctx.fillText("Pause", 220, 500);
          startGameInt = 0;
          clearInterval(intervalGame);
      }
    }
    else if (keyID == 13) {
      resetGame();
    }
}


var opponentX = [10, 200, 400, 500 ];
var opponentY = [-500, -1000, -1500, -2000 ];
var opponentSpeed = 20;
var opponentSpeedCount = 1;

function drawOpponent() {
  for (var i = 0; i < opponentSpeedCount; i++) {
    opponentY[i] += opponentSpeed;
    ctx.drawImage(opponentCar1, opponentX[i], opponentY[i], 150, 150);
  }
  if (levelCount == 1000 && opponentSpeedCount < 4) {
    levelCount = 0;
    opponentSpeedCount++;
  }
  for (var i = 0; i < opponentSpeedCount; i++) {
    if (opponentY[i] > 1200) {
      opponentY[i] = -getRandomInt(200, 2000);
      opponentX[i] = getRandomInt(0, 500);
    }
  }
}


function death() {
  if (playerX <= -100 || playerX >= 550 || playerY <= -100 || playerY >= 950) {
    reset();
  }
  for (var i = 0; i < opponentSpeedCount; i++) {
    if (playerX < opponentX[i]+70 && playerX+70 > opponentX[i] &&
     playerY < opponentY[i]+150 && playerY+150 > opponentY[i] ) {
       reset();
     }
  }
}


function reset() {
  scoreInt++;
  playerX = 220;
  playerY = 700;
  playerSpeedX = 0;
  playerSpeedY = playerSpeedX;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var scoreInt = 0;
var timeInt = 10000;

function score() {
  timeInt--;
  ctx.font="20px Arial";
  ctx.fillText("Damage: " + scoreInt*10 +"$", 10, 920);
  ctx.fillText("Time: " + timeInt, 10, 950);
  if (timeInt == 0) {
    startGameInt = 0;
    clearInterval(intervalGame);
    resetGame();
  }
}


function resetGame() {
  ctx.fillText("Spacebar", 250, 500);
  scoreInt = 0;
  timeInt = 10000;
  opponentX = [10, 200, 400, 500 ];
  opponentY = [-500, -1000, -1500, -2000 ];
  opponentSpeed = 20;
  opponentSpeedCount = 1;
  playerSpeedX = 0;
  playerSpeedY = playerSpeedX;
  playerSpeed = 5;
  playerX = 220;
  playerY = 700;
}
