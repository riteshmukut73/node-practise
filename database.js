var mango = require('mongodb')
const mongoose = require('mongoose')

const mongurl = "mongodb+srv://riteshmukut:Ritesh%7020@cluster0.9uekp.mongodb.test/"

mongoose.connect(mongurl)
    //default connection
const db = mongoose.connection;

//bind for error events
db.on('error', console.error.bind(console, 'mongodb error'))

db.once('open', () => {
    console.log("connection created");
})

db.createCollection('mydatabase', (err, result) => {
    if (err) {
        console.error("error while creating collection"); {

            else
        }
        console.log("database is created");

    }
})