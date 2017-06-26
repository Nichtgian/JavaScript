var p1Color = "#65ff00";
var p1Shadow = "#a8fdff";
var p2Color = "#3366ff";
var p2Shadow = "#db41d1";

var canvas = document.getElementById("playGround");
var player1 = canvas.getContext("2d");
var player2 = canvas.getContext("2d");

var speed = 7;
var befahreneFelder = [ ];

var p1x = 50;
var p1y = 350;
var p2x = 950;
var p2y = 350;

var p1Direction = "RIGHT";
var p2Direction = "LEFT";
var z;

player1.beginPath();
player2.beginPath();

player1.moveTo(p1x, p1y);
player2.moveTo(p2x, p2y);

document.onkeydown = KeyCheck;

delay1();

function deathp1()
{
    if (  (p1x < 0 || p1x > 1000) || (p1y < 0 || p1y > 700)  )
    {
        reset();
    }
    else {
      for (z = 0; z < befahreneFelder.length -1; z++)
      {
        if (z >= 0) {
          if ( (befahreneFelder[z].x == p1x) && (befahreneFelder[z].y == p1y) )
          {
            reset();
          }
        }
      }
    }
  }

  function deathp2()
  {
      if (  (p2x < 0 || p2x > 1000) || (p2y < 0 || p2y > 700)  )
      {
          reset();
      }
      else {
        for (z = 0; z < befahreneFelder.length -1; z++)
        {
          if (z >= 0) {
            if ( (befahreneFelder[z].x == p2x) && (befahreneFelder[z].y == p2y) )
            {
              reset();
            }
          }
        }
      }
    }

function reset()
{
  player1.closePath();
  player1.clearRect(0, 0, canvas.width, canvas.height);
  player2.closePath();
  player2.clearRect(0, 0, canvas.width, canvas.height);

  canvas = document.getElementById("playGround");
  player1 = canvas.getContext("2d");
  player2 = canvas.getContext("2d");
  befahreneFelder = [ ];

  var p1x = 150;
  var p1y = 350;
  var p2x = 850;
  var p2y = 350;

  p1Direction = "RIGHT";
  p2Direction = "UP";

  player1.beginPath();
  player2.beginPath();

  player1.moveTo(p1x, p1y);
  player2.moveTo(p2x, p2y);
}

function KeyCheck()
 {
  var KeyID = event.keyCode;

    if ( (KeyID == 37 || KeyID == 65 || KeyID == 74) && (p1Direction != "RIGHT") )
    {
        p1Direction = "LEFT";
        p2Direction = "LEFT";
    }
    else if ( (KeyID == 38 || KeyID == 87 || KeyID == 73) && (p1Direction != "UP") )
    {
        p1Direction = "DOWN";
        p2Direction = "DOWN";
    }
    else if ( (KeyID == 39 || KeyID == 68 || KeyID == 76) && (p1Direction != "LEFT") )
    {
        p1Direction = "RIGHT";
        p2Direction = "RIGHT";
    }
    else if ( (KeyID == 40 || KeyID == 83 || KeyID == 75) && (p1Direction != "DOWN") )
    {
        p1Direction = "UP";
        p2Direction = "UP";
    }
    else if (KeyID == 13)
    {
          reset();
    }
  }

  function draw2()
  {
    switch (p2Direction)
    {
      case "RIGHT":
          p2x += speed;
          break;
      case "LEFT":
          p2x -= speed;
          break;
      case "UP":
          p2y += speed;
          break;
      case "DOWN":
          p2y -= speed;
          break;
      default:
          break;
    }
    befahreneFelder.push({x:p2x, y:p2y});
    player1.lineTo(p2x,p2y);
    player1.lineWidth = 2;
    player1.strokeStyle = p2Color;
    player1.lineCap = "round";
    player1.lineJoin = "round";
    player1.shadowOffsetX = 0;
    player1.shadowOffsetY = 0;
    player1.shadowBlur = 2;
    player1.shadowColor = p2Shadow;
    player1.stroke();
  }

function draw1()
{
  switch (p1Direction)
  {
    case "RIGHT":
        p1x += speed;
        break;
    case "LEFT":
        p1x -= speed;
        break;
    case "UP":
        p1y += speed;
        break;
    case "DOWN":
        p1y -= speed;
        break;
    default:
        break;
  }
  befahreneFelder.push({x:p1x, y:p1y});
  player1.lineTo(p1x,p1y);
  player1.lineWidth = 2;
  player1.strokeStyle = p1Color;
  player1.lineCap = "round";
  player1.lineJoin = "round";
  player1.shadowOffsetX = 0;
  player1.shadowOffsetY = 0;
  player1.shadowBlur = 2;
  player1.shadowColor = p1Shadow;
  player1.stroke();
}

function delay1()
{
  draw1();
  deathp1();
  draw2();
  deathp2();

  setTimeout(function()
  {
    delay2();
  }, 19);
}

function delay2()
{
  setTimeout(function()
  {
    delay1();
  }, 19);
}
