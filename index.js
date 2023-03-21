const express = require('express');

const app = express();

app.listen('3000')

//GET
//app.route('/').get( (req, res) => res.send("hello"))
//app.route('/about').get( (req, res) => res.send("hello everyone"))

//POST
//middleware
//app.use(express.json())

//app.route('/').post( (req, res) => res.send(req.body))

//PUT

//app.use(express.json())

//let author = "Weslley"

//see what you had before 
//app.route('/').get( (req, res) => res.send(author))

//app.route('/').put( (req, res) => {
    //author = req.body.author
    //res.send(author)
//})

//let author = "Weslley"

//app.route('/:identifiers').delete( (req, res) => {
    //res.send(req.params.identifiers)
//})

//PARAMS IN REQUEST
//app.use(express.json())

//app.route('/').get( (req, res) => res.send(req.query.name))

//app.route('/').put( (req, res) => res.send(req.body.author))

//app.route('/:paramters').get( (req, res) => res.send(req.params.paramters))

app.use(express.json())

app.route('/').post( (req, res) => {
    const { name, city} = req.body
    res.send(`${name} ${city}`)
})