let canvas = document.getElementById('world');
let world = canvas.getContext('2d');

let map = new World();
let player1 = new Player(100, 0.1);
let obstacle = new Obstacle(300, 50, 300);

let ground = new Image;
ground.src = 'canvas-ground.png';
let heart = new Image;
heart.src = 'canvas-heart.png';
let tube = new Image;
tube.src = 'canvas-tube.png';
let tubeInvert = new Image;
tubeInvert.src = 'canvas-tube-invert.png';
let playerNyan = new Image;
playerNyan.src = 'canvas-player.png';

let gameInterval = setInterval( () => {
  if (!map.scoreboard) {
    world.clearRect(0, 0, canvas.width, canvas.height);
    renderPlayer(eval("player1"));
    renderGravity(eval("player1"));
    detectDeath(eval("player1"));
    drawMap();
    renderObstacle();
    renderHealth(eval("player1"));
    renderScore(eval("player1"));
  }
}, 20);

function renderPlayer(p) {
  world.drawImage(playerNyan, p.x, p.y, p.size, p.size)
}

function renderGravity(p) {
  p.y -= p.bounce;
  p.gravity = p.speed + (p.gravity + (p.mass * map.gravity));
  p.y += p.gravity;
  if (p.y + p.size >= canvas.height - map.groundHeight) {
    p.y = canvas.height - p.size - map.groundHeight;
    //resetGame();
  }
}

function renderObstacle() {
  obstacle.x -= obstacle.speed;
  world.drawImage(tube, obstacle.x, 0, obstacle.width, obstacle.height);
  world.drawImage(tubeInvert, obstacle.x, obstacle.height + obstacle.space, obstacle.width, canvas.height - (obstacle.height + obstacle.space));
  if (obstacle.x + obstacle.width <= 0) {
    resetObstacle();
  }
}

function resetObstacle() {
  obstacle.x = 800;
  obstacle.height = obstacle.getHeight(50, 300);
  obstacle.space = obstacle.getSpace(300);
  obstacle.width = obstacle.getWidth();
  obstacle.hit = false;
}

function detectDeath(p) {
  if (!obstacle.hit) {
    if ((p.x + p.size >= obstacle.x && p.x + p.size <= obstacle.x + obstacle.width) && (p.y + p.size >= 0 && p.y <= obstacle.height)) {
      obstacle.hit = true;
      death(p);
    }
    if ((p.x + p.size >= obstacle.x && p.x + p.size <= obstacle.x + obstacle.width) && (p.y + p.size >= obstacle.height + obstacle.space && p.y <= canvas.height)) {
      obstacle.hit = true;
      death(p);
    }
    if (p.x == obstacle.x) {
      p.score += 1;
    }
  }
}

function death(p) {
  if (obstacle.hit) {
    p.life -= 1;
    if (p.life == 0) {
      resetGame();
    }
  }
}

function drawMap() {
  world.drawImage(ground, map.ground1, canvas.height - map.groundHeight, canvas.width, map.groundHeight);
  world.drawImage(ground, map.ground2, canvas.height - map.groundHeight, canvas.width, map.groundHeight);
  map.ground1 -= obstacle.speed;
  map.ground2 -= obstacle.speed;
  if (map.ground1 <= -canvas.width) {
    map.ground1 = canvas.width;
  }
  if (map.ground2 <= -canvas.width) {
    map.ground2 = canvas.width;
  }
}

function renderHealth(p) {
  let distance = 45;
  let distanceBetween = 0;
  for (var i = 0; i < p.life; i++) {
    world.drawImage(heart, canvas.width - distance - distanceBetween, canvas.height - distance, distance - 15, distance - 15);
    distanceBetween += distance;
  }
}

function renderScore(p) {
  world.textAlign="right";
  world.font = "30px Arial";
  world.fillStyle = "white";
  world.fillText(p.score, canvas.width - 50, 50);
}

function resetGame() {
  getHighscore(eval("player1"));
  world.font = "30px Arial";
  world.fillStyle = "white";
  world.textAlign="center";
  world.fillText("Your Score: " + player1.score, canvas.width / 2, canvas.height / 2 - 150);
  world.fillText("Highscore: " + map.highscore, canvas.width / 2, canvas.height / 2 - 50);
  map.scoreboard = true;
  player1 = new Player(100, 0.1);
  obstacle = new Obstacle(300, 50, 300);
}

function scoreboard() {
  if (map.scoreboard) {
    map.scoreboard = false;
  }
  else { /*PAUSE*/
    map.scoreboard = true;
    world.font = "30px Arial";
    world.fillStyle = "white";
    world.textAlign="center";
    world.fillText("PAUSE", canvas.width / 2, canvas.height / 2);
  }
}

function getHighscore(p) {
  if (p.score > map.highscore) {
    map.highscore = p.score;
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 32 && map.scoreboard) { /*SPACE*/
    map.scoreboard = false;
  }
  else if (e.keyCode == 32) { /*SPACE*/
    player1.bounce = 20;
    player1.gravity = 0;
  }
  else if (e.keyCode == 27) { /*ESC*/
    scoreboard();
  }
}

document.onTouch = function() {
  player1.bounce = 20;
  player1.gravity = 0;
}
