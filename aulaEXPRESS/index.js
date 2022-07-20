const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send("Servidor Funcionando, Seja Bem-Vindo")
})

app.get("/sobre", function(req,res){
    res.send("Meu nome: Lucas Suzuki")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog")
})


app.listen(3000, function(){
    console.log("Servidor rodando . . .");
})