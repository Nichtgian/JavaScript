var client = new WebSocket('ws://mami1.markab.uberspace.de:61788', 'echo-protocol');

function sendMessage(msg)
{
  client.send(JSON.stringify(msg));
}

client.onerror = function()
{
    console.log('Connection Error');
}

client.onopen = function()
{

    console.log('WebSocket Client Connected');
    startGame();

}

client.onclose = function()
{
    console.log('echo-protocol Client Closed');
}

client.onmessage = function(e)
{
    if (typeof e.data === 'string')
    {
      var data = JSON.parse(e.data);
      console.log(data);
      switch (data.type)
      {
        case "CHANGE":
          receiveDirection(data.content);
          break;
        case "PLAYER_CONNECTED":
          reset();
          break;
        default:

      }
    }
}
