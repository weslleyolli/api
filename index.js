const express = require('express');

const app = express();

app.listen('3000')

//Post
//app.route('/').get( (req, res) => res.send("hello"))
//app.route('/about').get( (req, res) => res.send("hello everyone"))

//POST
//middleware
//app.use(express.json())

//app.route('/').post( (req, res) => res.send(req.body))

app.use(express.json())

let author = "Weslley"

//see what you had before 
app.route('/').get( (req, res) => res.send(author))

app.route('/').put( (req, res) => {
    author = req.body.author
    res.send(author)
})