const express = require("express")
const app = express()

app.use(( req, res, next) => {
    console.log('First middleware');
    next()
})

app.use((req, res, next) => {
    console.log('seconde middleware');
    next()
})

app.use((req, res, next) => {
    res.status(201)
    next()
})

app.use((req, res) => {
    res.json({ response : "Hello World 🏀", message: "c'est good" })
})

module.exports = app