const express = require("express");
const app = express()
const mongoose = require("mongoose")
const homeRoute = require("./route/home")
const cors = require("cors");
const User = require("./modals/user");

app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use('/home', homeRoute)
app.get("/", (req, res) => {
    console.log(req.socket);

    res.send("hi")
})

app.post("/login", async (req, res) => {
    console.log("hi");
    const user = await User.findOne({ name: req.body.name })
    if (user) {
        const authorised = user.password === req.body.password
        console.log(authorised);
        if (authorised) {
            res.sendStatus(200)
        } else {
            res.status(401).send("wrong credintial")
        }
    }
    else {
        const user = await new User({
            name: req.body.name,
            password: req.body.password
        })
        await user.save()
        res.sendStatus(200)
    }
})

mongoose.connect("mongodb://localhost:27017/noteit")

app.listen(4000);
