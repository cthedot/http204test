/**
 * A JavaScript version SimpleHTTPServer.
 */
var http = require('http'),
  port = 8002,
  urlParser = require('url'),
  fs = require('fs')


http.createServer(function (request, response) {
  var urlObject = urlParser.parse(request.url, true),
		  pathname = decodeURIComponent(urlObject.pathname),
		  contentType = 'text/html'

  var connection = request.connection

  console.log("[" + (new Date()).toUTCString() + "] " + '"' + request.method + " " + pathname + "\"");
  console.log(request.headers)

  var data = '';

  request.on('data', function (d) {
    data += d;
  });
  request.on('end', function () {
    var code = 204
    var body = ''
    // any value > 0 and Edge waits for content but fails even is sent
    var length = 2  
    
    response.writeHead(code, {
        'Access-Control-Allow-Origin': '*',
        'Content-Length': length,
        'Content-Type': 'application/json'
    }); 
    response.end(body);
  });
  return
}).listen(port);

console.log("Server running at http://localhost" + ((port === 80) ? "" : ":") + port + "/");
