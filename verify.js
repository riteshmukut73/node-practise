const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    const token = req.header('Auth-token')


    if (token) return res.status(401).send("access denied")
    try {
        const verified = jwt.verify(token, ProcessingInstruction.env.token_secret)
        res.userexist = jwt.verified
        next()
    } catch (error) {

        res.status(400).send("invalid token")
    }

}