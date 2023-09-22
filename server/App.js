const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World. Gabe is a bitch\n");
});
server.listen(4000);