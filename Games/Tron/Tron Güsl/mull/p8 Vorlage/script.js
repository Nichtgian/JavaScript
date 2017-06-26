var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' | WEBSOCKET | Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(63169, function() {
    console.log((new Date()) + ' | WEBSOCKET | Server is listening on port 61910');
});

/*
 *    VARIABLES
 */
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

/*
 *    VARIABLES
 */
var all_active_connections = {};
var global_counter = 0;
var online_users = 0;


/*
 *    OPEN DATABASE CONNECTION
 */




/*
 *    START WEBSOCKET APPLICATION
 */
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' | WEBSOCKET | Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    /*
     *    ON SUCCESSFULL CONNECTION
     */


    var connection = request.accept('echo-protocol', request.origin);

    var id = global_counter++;
    all_active_connections[id] = connection;



    /*
     *    ON RECIVE MESSAGE
     */
    connection.on('message', function(message) {
      console.log(message);
          if (message.type === 'utf8') {
               var data = JSON.parse(message.utf8Data);
               // VALIDATE THE MESSAGE
               if(!(typeof data.type === 'changedcords')) {
                 console.log("+1");
                   /* SEND THE MESSAGE TO ALL CONNECTED CLIENTS */
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


    /*
     *    ON CLOSE CONNECTION
     */
    connection.on('close', function(reasonCode, description) {
      // REMOVE ALL_ACTIVE_CONNECTIONS ENTRY
      all_active_connections[id] = null;


      console.log((new Date()) + ' | WEBSOCKET | Client ' + connection.remoteAddress + ' disconnected.');
    });

});
