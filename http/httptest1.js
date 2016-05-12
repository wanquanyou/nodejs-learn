var sys = require('util');
var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello, world");
	response.end();
}).listen(8080);
sys.puts("Server running at http://localhost:8080/");

