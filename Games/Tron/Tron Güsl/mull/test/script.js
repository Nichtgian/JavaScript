var p1Color = "#42f4eb";
var p1Shadow = "#a8fdff";
var p2Color = "#ff0000";
var p2Shadow = "#db41d1";

var canvas = document.getElementById("playGround");
var player1 = canvas.getContext("2d");
var player2 = canvas.getContext("2d");

var z;
var speed = 7;
var befahreneFelder = [ ];

var x1 = 50;
var y1 = 350;
var x2 = 950;
var y2 = 350;

var direction1 = "RIGHT";
var direction2 = "LEFT";

player1.beginPath();
player1.moveTo(x1, y1);
player2.beginPath();
player2.moveTo(x2, y2);

document.onkeydown = KeyCheck2;
document.onkeydown = KeyCheck1;

delay1();

function death()
{
    if (  (x1 < 0 || x1 > 1000) || (y1 < 0 || y1 > 700) || (x2 < 0 || x2 > 1000) || (y2 < 0 || y2 > 700) )
    {
        reset();
    }
    else {
      for (z = 0; z < befahreneFelder.length -1; z++)
      {
        if (z >= 0) {
          if ( (befahreneFelder[z].x == x1) && (befahreneFelder[z].y == y1) || (befahreneFelder[z].x == x2) && (befahreneFelder[z].y == y2) )
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

  x1 = 50;
  y1 = 350;
  x2 = 950;
  y2 = 350;

  direction1 = "RIGHT";
  direction2 = "LEFT";

  player1.beginPath();
  player1.moveTo(x1, y2);

  player2.beginPath();
  player2.moveTo(x2, y2);
}

function KeyCheck1()
 {
  var KeyID = event.keyCode;

    if ( (KeyID == 37 /*|| KeyID == 65*/) && (direction != "RIGHT") )
    {
        direction1 = "LEFT";
    }
    else if ( (KeyID == 38 /*|| KeyID == 87*/) && (direction != "UP") )
    {
        direction1 = "DOWN";
    }
    else if ( (KeyID == 39 /*|| KeyID == 68*/) && (direction != "LEFT") )
    {
        direction1 = "RIGHT";
    }
    else if ( (KeyID == 40 /*|| KeyID == 83*/) && (direction != "DOWN") )
    {
        direction1 = "UP";
    }
    else if (KeyID == 13)
    {
          reset();
    }
  }

  function KeyCheck2()
   {
    var KeyID = event.keyCode;

      if ( (/*KeyID == 37 || */KeyID == 65) && (direction != "RIGHT") )
      {
          direction2 = "LEFT";
      }
      else if ( (/*KeyID == 38 ||*/ KeyID == 87) && (direction != "UP") )
      {
          direction2 = "DOWN";
      }
      else if ( (/*KeyID == 39 ||*/ KeyID == 68) && (direction != "LEFT") )
      {
          direction2 = "RIGHT";
      }
      else if ( (/*KeyID == 40 ||*/ KeyID == 83) && (direction != "DOWN") )
      {
          direction2 = "UP";
      }
      else if (KeyID == 13)
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
  switch (direction2)
  {
    case "RIGHT":
        x2 += speed;
        break;
    case "LEFT":
        x2 -= speed;
        break;
    case "UP":
        y2 += speed;
        break;
    case "DOWN":
        y2 -= speed;
        break;
    default:
        break;
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
}

function delay1()
{
  draw1();
  draw2();
  death();
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
