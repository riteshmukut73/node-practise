const express = require('express')
const cookieparser = require('cookie-parser')

var app = express()
app.use(cookieparser())


app.get('/', function(req, res) {
    res.send("hello world...")
})

let user = {
    name: "john",
    age: 23
}


//set cookie
app.get('/setuser', (req, res) => {
    res.cookie('userdata', user);
    res.send("user data added to cookie")
})

//interate
app.get('/getuser', (req, res) => {
    res.send(req.cookies)
})


app.get('/logout', (req, res) => {
    res.clearcookie('Userdata')
    res.send("user logout successfully")
})




app.listen(4000)