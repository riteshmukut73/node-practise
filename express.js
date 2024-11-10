const express = require('express')
const app = express()

const mongoose = require('mongoose')
app.use(express.json())
const router = require('./route')
app.use("/user")

mongoose.connect("mongodb+srv://riteshmukut:Ritesh%7020@cluster0.9uekp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", (err, data) => {
        if (err) throw err
        console.log("connection created");

    })
    .catch(err) => {
        console.error(err);
        (err);

    }
app.listen(4000);






//app.use(express.static("public"))
//app.get('/about'),(req,res)=>{
//res.send("hello world....")
//}}listen(4000)

//app.post('/',req,res)=>{
//res.send("hello world....")
//}}listen(4000)













//app.use(express.static('public'))
//app.get('/about', (req, res) => {
//res.send("hello world....!")
//}).listen(4000)

app.post('/', (req, res) => {
    res.send("hello world....!")
}).listen(4000)