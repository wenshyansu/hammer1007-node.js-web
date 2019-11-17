/*
2.第一個nodejs程式
http://hammer1007.blogspot.com/2017/11/nodejs1-2nodejs.html
 */
var http = require("http");

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end("這是第一個node.js程式");
});

server.listen(3000);
console.log("listeming at http://localhost:3000");