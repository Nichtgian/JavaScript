var p1Color = "#42f4eb";
var p1Shadow = "blue";
var p2Color = "red";
var p2Shadow = "#f91100";

var canvas = document.getElementById("playGround");
var player1 = canvas.getContext("2d");
var player2 = canvas.getContext("2d");
var scoreP1 = canvas.getContext("2d");
var scoreP2 = canvas.getContext("2d");

var gradient = scoreP1.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0","#42f4eb");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("0.75","orange");
gradient.addColorStop("1.0","red");
scoreP1.fillStyle = gradient;

var i;
var u;
var z;
var q = 1;
var speed = 1;
var befahreneFelder = [ ];
var score1 = 0;
var score2 = 0;

scoreP1.font="30px Verdana";
scoreP1.fillText("Player 1: ",10,690);
scoreP2.font="30px Verdana";
scoreP2.fillText("Player 2: ",800,690);

var x1 = 50;
var y1 = 350;
var x2 = 950;
var y2 = 350;

var direction1 = "RIGHT";
var direction2 = "LEFT";
var direction2S = "LEFT";

document.onkeydown = keyCheck;
delay1();

function death()
{
    if (  (x1 < 0 || x1 > 1000) || (y1 < 0 || y1 > 700)  )
    {
        score2++;
        reset();
    }
    else if (  (x2 < 0 || x2 > 1000) || (y2 < 0 || y2 > 700) )
    {
        score1++;
        reset();
    }
    else
    {
      for (z = 0; z < befahreneFelder.length -2; z++)
      {
          if ( (befahreneFelder[z].x == x1) && (befahreneFelder[z].y == y1) )
          {
            score2++;
            reset();
          }
          else if ( (befahreneFelder[z].x == x2) && (befahreneFelder[z].y == y2) )
          {
            score1++;
            reset();
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

  scoreP1.font="30px Verdana";
  scoreP1.fillText("Player 1: " +score1,10,690);
  scoreP2.font="30px Verdana";
  scoreP2.fillText("Player 2: " +score2,800,690);

  befahreneFelder = [ ];

  x1 = 50;
  y1 = 356;
  x2 = 950;
  y2 = 350;

  direction1 = "RIGHT";
  direction2 = "LEFT";
}

function keyCheck()
 {
  var keyID = event.keyCode;

    if ( (keyID == 65) && (direction1 != "RIGHT") )
    {
        direction1 = "LEFT";
    }
    else if ( (keyID == 87) && (direction1 != "UP") )
    {
        direction1 = "DOWN";
    }
    else if ( (keyID == 68 ) && (direction1 != "LEFT") )
    {
        direction1 = "RIGHT";
    }
    else if ( (keyID == 83) && (direction1 != "DOWN") )
    {
        direction1 = "UP";
    }
    else if (keyID == 13)
    {
          reset();
    }
  }

function draw1()
{
  switch (direction1)
  {
    case "RIGHT":
        x1 += speed;
        break;
    case "LEFT":
        x1 -= speed;
        break;
    case "UP":
        y1 += speed;
        break;
    case "DOWN":
        y1 -= speed;
        break;
    default:
        break;
  }
  player1.beginPath();
  for (i; i < 1; i++)
  {
    player1.moveTo(x1, y1);
  }
  befahreneFelder.push({x:x1, y:y1});
  player1.lineTo(x1,y1);
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

function draw2()
{
  bot();

  switch (direction2)
  {
    case "RIGHT":
        x2 += speed;
        break;
    case "LEFT":
        x2 -= speed;
        break;
    case "DOWN":
        y2 += speed;
        break;
    case "UP":
        y2 -= speed;
        break;
    default:
        break;
  }
  player2.beginPath();
  for (u; u < 1; u++)
  {
    player2.moveTo(x1, y1);
  }
  befahreneFelder.push({x:x2, y:y2});
  player2.lineTo(x2,y2);
  player2.lineWidth = 2;
  player2.strokeStyle = p2Color;
  player2.lineCap = "round";
  player2.lineJoin = "round";
  player2.shadowOffsetX = 0;
  player2.shadowOffsetY = 0;
  player2.shadowBlur = 2;
  player2.shadowColor = p2Shadow;
  player2.stroke();

  for (q; q < 2; q++)
  {
    direction2 = direction2S;
  }
}

function delay1()
{
  draw1();
  draw2();
  death();
  setTimeout(function()
  {
    delay2();
  }, 2);
}

function delay2()
{
  setTimeout(function()
  {
    delay1();
  }, 2);
}

function bot()
{
  // RAND AUSWEICHEN -->
  if (x2 < 1 && direction2 == "LEFT")
  {
    if (y2 > 350)
    {
      direction2 = "UP";
      direction2S = "RIGHT";
      q = 0;
    }
    else
    {
      direction2 = "DOWN";
      direction2S = "RIGHT";
      q = 0;
    }
  }


  else if (x2 > 999 && direction2 == "RIGHT")
  {
    if (y2 > 350)
    {
      direction2 = "UP";
      direction2S = "LEFT";
      q = 0;
    }
    else
    {
      direction2 = "DOWN";
      direction2S = "LEFT";
      q = 0;
    }
  }

  else if (y2 < 1 && direction2 == "UP")
  {
    if (x2 > 500)
    {
      direction2 = "RIGHT";
      direction2S = "DOWN";
      q = 0;
    }
    else
    {
      direction2 = "LEFT";
      direction2S = "DOWN";
      q = 0;
    }
  }

  else if (y2 > 699 && direction2 == "DOWN")
  {
    if (x2 > 500)
    {
      direction2 = "RIGHT";
      direction2S = "UP";
      q = 0;
    }
    else
    {
      direction2 = "LEFT";
      direction2S = "UP";
      q = 0;
    }
  }

if (x1 - x2 >= 20)
{

}
else if (x1 - x2 < 0 && x1 - x2 > - 20)
{

}
  //<-- RAND AUSWEICHEN
  // SPIELER ANGREIFEN -->
/*
  for (z = 0; z < befahreneFelder.length -2; z++)
  {
    if (direction2 == "UP")
    {
      if ( (befahreneFelder[z].x == x2) && (befahreneFelder[z].y == y2-1) )
      {
        direction2 == "LEFT";
      }
    }
    else if (direction2 == "DOWN")
    {
      if ( (befahreneFelder[z].x == x2) && (befahreneFelder[z].y == y2+1) )
      {
        direction2 == "RIGHT";
      }
    }
    else if (direction2 == "LEFT")
    {
      if ( (befahreneFelder[z].x == x2-1) && (befahreneFelder[z].y == y2) )
      {
        direction2 == "UP";
      }
    }
    else if (direction2 == "RIGHT")
    {
      if ( (befahreneFelder[z].x == x2+1) && (befahreneFelder[z].y == y2) )
      {
        direction2 == "DOWN";
      }
    }
  }*/
}
