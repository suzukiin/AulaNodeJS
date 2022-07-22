const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require("sequelize");



//config
    //  template engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //conexão com banco de dados
    const sequelize = new Sequelize('sistemadecadastro', 'root', '1711', {
        host: "localhost",
        dialect: "mysql"
    })

    //rotas

    app.get('/cad', function(req,res) {
        res.render('formulario')
    })

    app.post('/add', function(req,res){
        res.send('Formulario Recebido!!')
    })

app.listen(3000, function(){
    console.log("Servidor rodando . . .");
})