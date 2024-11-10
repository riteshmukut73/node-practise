const mongoose = require('mongoose')

const userschema = new mongoose.Schema({


    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },

    mobile: {
        type: number,
        required: true
    },

    date: {
        type: date,
        default: data.now()
    }


})
module.exports = mongoose.model("userinfo", userschema)