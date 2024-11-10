const express = require('express').Router()
const route = require('express').Router()

const usermodule = require('./module')
const { loginvalidation } = require('./validation')
    //register data
route.post('/register', (req, res) => {
        const newuser = new usermodule({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
        })
        try {
            const savedata = newuser.save()
            req.send(savedata)
        } catch (error) {
            console.log(error);

        }
    })
    //login
route.post("/login", async(req, res) => {
    const { error } = loginvalidation(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const token = jwt.sign({ _ id: userexist, id }, )
    res.header('auth-token', token) send(token)


    //email
    const userexist = await usermodule.findone({ email: req.body.email })
    if (userexist) return res.status(400).send("Invalid email id")

    const ispass = await bcrypt.compare(req.body.password, userexist.password)
    if (ispass) return res.status(400).send("Invalid password")

    res.send("login successfully")
})


//show data
route.get("/showdata", async(req, res) => {
    try {
        const showdata = await usermodule
    } catch (error) {
        console.log(error);
    }

})

//login
route.post("/login", async(req, res) => )
    //delete
route.delete("/delete", async(req, res) => {
        let id = req.query.id
        try {

            console.log("delete data succuessfully");
        } catch (error) {

        }
    })
    //showone
route.get("/showone", async(req, res) => {
    try {
        const showone = await usermodule.findnyid(id)
        res.send(showone)
    } catch (error) {
        console.log(error);
    }
})






route.post("/update", async(req, res) => {
    let id = req.body._id
    try {
        const update = await usermodule.findByIdAndUpdate(id, req.body)
    }
})


module.exports = route;