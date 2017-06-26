var c = document.getElementById("playGround");
var ctx = c.getContext("2d");
var intervalRepeat = 50;
var returnRandX;

var cubesX = [0, 0, 0, 0, 0];
var cubesY = [0, 0, 0, 0, 0];
var cubesY1, cubesX1;

var cubesCheck = [0, 0, 0, 0, 0];
var swag = 0, repeats = 0, steps = 5, lifes;
document.onkeydown = keyCheck;

ctx.font = "60px Arial";
ctx.fillStyle = 'white';
ctx.textAlign="center";
ctx.fillText("1", 75, 500);
ctx.fillText("2", 225, 500);
ctx.fillText("3", 375, 500);
ctx.fillText("4", 525, 500);

ctx.beginPath();
ctx.moveTo(0,400);
ctx.lineTo(600,400);
ctx.lineWidth = 5;
ctx.strokeStyle = '#fff';
ctx.stroke();

function startGame()
{
  steps = 5;
  if (swag != 0)
  {
    window.clearInterval(intervalGame);
  }
  cubesCheck = [0, 0, 0, 0, 0];
  swag++;

  cubesX = [0, 150, 300, 450, 0];
  cubesY = [-200, -400, -600, -800, -1000];

  ctx.clearRect(0, 0, c.width, c.height);

  intervalGame = window.setInterval(function ()
  {
    ctx.clearRect(0, 0, c.width, c.height);
    play();
    death();
  }, 20);
  }

function play()
{
  repeats++;
  ctx.beginPath();
  ctx.fillStyle = "white";

  for (var i = 0; i < 5; i++)
  {
    ctx.fillStyle = "white";
    cubesY[i] += steps;
    if (cubesCheck[i] != 0)
    {
      ctx.fillStyle = "#000";
    }
    ctx.fillRect(cubesX[i], cubesY[i], 150,  200);
  }
  ctx.fillStyle = "white";
  ctx.fillText("1", 75, 500);
  ctx.fillText("2", 225, 500);
  ctx.fillText("3", 375, 500);
  ctx.fillText("4", 525, 500);

  ctx.moveTo(0,400);
  ctx.lineTo(600,400);
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#fff';
  ctx.stroke();

  if (repeats == 2000)
  {
    steps += 5;
    repeats = 0;
  }
}

function keyCheck()
{
  var keyID = event.keyCode;
  var bis = 450;

    if (keyID == 49) /*KEY 1*/
    {
      for (var i = 0; i < 5; i++)
      {
        if (cubesX[i] == 0 && (cubesY[i] > 200 && cubesY[i] < bis))
        {
          cubesCheck[i]++;
        }
      }
    }
    else if (keyID == 50) /*KEY 2*/
    {
      for (var i = 0; i < 5; i++)
      {
        if (cubesX[i] == 150 && (cubesY[i] > 200 && cubesY[i] < bis))
        {
          cubesCheck[i]++;
        }
      }
    }
    else if (keyID == 51) /*KEY 3*/
    {
      for (var i = 0; i < 5; i++)
      {
        if (cubesX[i] == 300 && (cubesY[i] > 200 && cubesY[i] < bis))
        {
          cubesCheck[i]++;
        }
      }
    }
    else if (keyID == 52) /*KEY 4*/
    {
      for (var i = 0; i < 5; i++)
      {
        if (cubesX[i] == 450 && (cubesY[i] > 200 && cubesY[i] < bis))
        {
          cubesCheck[i]++;
        }
      }
    }
    else if (keyID == 32 || keyID == 12)
    {
      startGame();
    }
}

function death()
{
  for (var i = 0; i < 5; i++)
  {
    if (cubesY[i] >= 800 && cubesCheck[i] != 0)
    {
      cubesCheck[i] = 0;

      cubesY[i] = -200;
      returnRandX = Math.floor(Math.random() * 4);
      if (returnRandX == 0)
      {
        cubesX[i] = 0;
      }
      else if (returnRandX == 1)
      {
        cubesX[i] = 150;
      }
      else if (returnRandX == 2)
      {
        cubesX[i] = 300;
      }
      else
      {
        cubesX[i] = 450;
      }
    }
    else if (cubesY[i] >= 600 && cubesCheck[i] == 0)
    {
      window.clearInterval(intervalGame);

      cubesX = [0, 150, 300, 450, 0];
      cubesY = [-200, -400, -600, -800, -1000];

      ctx.clearRect(0, 0, c.width, c.height);
      ctx.fillText("GAME OVER", 300, 300);
    }
  }
}
