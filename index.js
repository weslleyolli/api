const express = require('express');
const axios = require('axios');

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


//BODY PARAMS
//app.use(express.json())

//app.route('/').post( (req, res) => {
    //const { name, city} = req.body
    //res.send(`${name} ${city}`)
//})

//QUERY PARAMS
//app.route('/').get( (req, res) => res.send("hello"))

//app.route('/:name').get( (req, res) => res.send(req.params.name))

//app.route('/identifiers/:var').get( (req, res) => res.send(req.params.var))

//QUERY PARAMS

//in insomnia localhost:3000?name=weslley&id=123

//app.route('/').get( (req, res) => res.send(req.query.name))

//app.route('/about').get( (req, res) => res.send(req.query.id))

//Consumindo com axios pegando imagem do github

app.route('/').get( (req, res) => {

   axios.get('https://api.github.com/users/weslleyolli') 
   .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
   .catch(err => console.log(err))
})

app.route('/').get( (req, res) => {

    axios.get('https://api.github.com/users/weslleyolli') 
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(err => console.log(err))
 })