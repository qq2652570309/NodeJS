var htttp  = require("http");

htttp.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8081);

console.log("Hello, World! Running at 127.0.0.1:8081");
