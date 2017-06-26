var WebSocketServer = require('websocket').server;
var http = require('http');

var userCount = 0;
var userConnection = [];

var player1 = false;
var player2 = false;

var server = http.createServer(function(request, response)
{
    console.log((new Date()) + ' | WEBSOCKET | Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(6969, function()
{
    console.log((new Date()) + ' | WEBSOCKET | Server is listening on port 6969');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin)
{
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

/*
 *    START WEBSOCKET APPLICATION
 */

wsServer.on('request', function(request)
{
    if (!originIsAllowed(request.origin))
    {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' | WEBSOCKET | Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    /*
     *    ON SUCCESSFULL CONNECTION
     */

    var connection = request.accept('echo-protocol', request.origin);

    userCount++;
    var userIndex = userCount;
    userConnection[userIndex] = connection;

    var isPlayer = false;

    if (player1 === false)
    {
      isPlayer = 1;
      player1 = true;
      connection.sendUTF(JSON.stringify({
        type: "YOU_ARE_PLAYER",
        content:
        {
          player: 1,
        }
      }));
      for (conn of userConnection)
      {
        if (typeof conn !== "undefined" && conn !== false)
        {
          conn.sendUTF(JSON.stringify({
            type: "PLAYER_CONNECTED",
            content:
            {
            }
          }));
        }
      }
      console.log("Client connected as Player 1");
    }
    else  if (player2 === false)
    {
      isPlayer = 2;
      player2 = true;
      connection.sendUTF(JSON.stringify({
        type: "YOU_ARE_PLAYER",
        content:
        {
          player: 2,
        }
      }));
      for (conn of userConnection)
      {
        if (typeof conn !== "undefined" && conn !== false)
        {
          conn.sendUTF(JSON.stringify({
            type: "PLAYER_CONNECTED",
            content:
            {
            }
          }));
        }
      }
      console.log("Client connected as Player 2");
    }
    else
    {
      connection.sendUTF(JSON.stringify({
        type: "YOU_ARE_VIEWER",
        content:
        {
        }
      }));
      console.log("Client connected as Viewer");
    }

    /*
     *    ON RECIVE MESSAGE
     */

  connection.on('message', function(message)
  {
    if (isPlayer !== false)
    {
      if (message.type === 'utf8')
      {
        var data = JSON.parse(message.utf8Data);
        var valid = false;

        if ('content' in data)
        {
          valid = true;
        }

        if (valid)
        {
          for (conn of userConnection)
          {
            if (typeof conn !== "undefined" && conn !== false)
            {
              conn.sendUTF(JSON.stringify({
                type: "CHANGE",
                content: {
                  direction: data.content.direction,
                  player: isPlayer,
                }
              }));
            }
          }
        }
      }
    }
  });


    /*
     *    ON CLOSE CONNECTION
     */

    connection.on('close', function(reasonCode, description)
    {
      userConnection[userIndex] = false;
      if (isPlayer === 1) {
        player1 = false;
      } else if (isPlayer === 2) {
        player2 = false;
      }

    });

});
