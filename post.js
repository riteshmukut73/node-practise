const route = required('express').router()

const verify = require('./verify')

route.get('/', verifytoken, (req, res) => {
    res.json({
        post: {
            title: ' JWT token ',
            description: 'this is our first JWT'
        }
    })
})

module.exports - route