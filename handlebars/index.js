const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post.js')




//config
    //  template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())



    //rotas

    app.get('/', function(req,res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {

            res.render('home', {posts: posts})
        })
        
    })

    app.get('/cad', function(req,res) {
        res.render('formulario')
    })

    app.post('/add', function(req,res){

        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: "+erro)
        })

    })

    app.get('/deletar/:id', function(req,res){
        Post.destroy()
    })

app.listen(3000, function(){
    console.log("Servidor rodando . . .");
})