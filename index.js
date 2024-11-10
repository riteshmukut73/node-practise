//var http = require('http');

//http.createServer(function(req, res) {
//res.writeHead(200, { 'Content-Type': 'text/plain' });
//res.end('Hello World!');
//}).listen(4000);


//const url = require('url')
//var adr = "https://en.wikipedia.org/wiki/Animal_(2023_Indian_film)"
//var q = url.parse(adr, true)
//console.log("Hostname is :", q.host);


//console.log(__dirname);
//console.log(__filename);


function msg() {
    console.log("hello world...");
}
var t = setTimeout(msg, 2000)
clearTimeout(t)