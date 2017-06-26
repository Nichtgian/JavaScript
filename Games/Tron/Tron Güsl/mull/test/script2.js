var p1Color = "#65ff00";
var p1Shadow = "#a8fdff";
var p2Color = "##65ff00";
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

    if ( (KeyID == 37 || KeyID == 65) && (p1Direction != "RIGHT") )
    {
        p1Direction = "LEFT";
        p2Direction = "LEFT";
    }
    else if ( (KeyID == 38 || KeyID == 87) && (p1Direction != "UP") )
    {
        p1Direction = "DOWN";
        p2Direction = "DOWN";
    }
    else if ( (KeyID == 39 || KeyID == 68) && (p1Direction != "LEFT") )
    {
        p1Direction = "RIGHT";
        p2Direction = "RIGHT";
    }
    else if ( (KeyID == 40 || KeyID == 83) && (p1Direction != "DOWN") )
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

/*var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' | WEBSOCKET | Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(63169, function() {
    console.log((new Date()) + ' | WEBSOCKET | Server is listening on port 61910');
});
*/
/*
 *    VARIABLES
 */
 /*
var all_active_connections = {};
var global_counter = 0;
var online_users = 0;

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // always verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  if (origin == "http://localhost:3000") {
    return true;
  } else if (origin ==  "http://www.041er-blj.ch") {
    return true;
  }
  // put logic here to detect whether the specified origin is allowed
  return false;
}
*/
/*
 *    VARIABLES
 */
 /*
var all_active_connections = {};
var global_counter = 0;
var online_users = 0;
*/

/*
 *    OPEN DATABASE CONNECTION
 */




/*
 *    START WEBSOCKET APPLICATION
 */
 /*
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' | WEBSOCKET | Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    */
    /*
     *    ON SUCCESSFULL CONNECTION
     */

/*
    var connection = request.accept('echo-protocol', request.origin);

    var id = global_counter++;
    all_active_connections[id] = connection;
*/


    /*
     *    ON RECIVE MESSAGE
     */
     /*
    connection.on('message', function(message) {
      console.log(message);
          if (message.type === 'utf8') {
               var data = JSON.parse(message.utf8Data);
               // VALIDATE THE MESSAGE
               if(!(typeof data.type === 'changedcords')) {
                 console.log("+1");*/
                   /* SEND THE MESSAGE TO ALL CONNECTED CLIENTS *//*
                   for(var i = 0; i < Object.keys(all_active_connections).length; i++) {
                     var currentconn = all_active_connections[i];

                     if(currentconn != null) {
                       console.log(message.utf8Data);
                       currentconn.sendUTF(message.utf8Data);
                     }
                 }

           }
         }
      });

*/
    /*
     *    ON CLOSE CONNECTION
     *//*
    connection.on('close', function(reasonCode, description) {
      // REMOVE ALL_ACTIVE_CONNECTIONS ENTRY
      all_active_connections[id] = null;


      console.log((new Date()) + ' | WEBSOCKET | Client ' + connection.remoteAddress + ' disconnected.');
    });

});*/
