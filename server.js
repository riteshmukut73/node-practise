const http = require('http')
const uc = require('uppercase')


http.CreateServer((req, res) => {
    console.log("Server created");
    req.writehead(200, { 'content-type': 'text/plain' })
        //res.write("<h1>hello world</h1>")
    res.write("hello world")
    res.end()
}).listen(4000)