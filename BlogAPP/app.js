//Módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
//const mongoose = require ('mongoose')

// Configurações
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    //Mongoose
        //Em breve

    //Public
        app.use(express.static(path.join(__dirname, "public")))
        
//Rotas
app.get('/', (req,res) =>{
    res.send("Rota principal")
})

app.use('/admin', admin) 


//Outros
app.listen(3000, () =>{
    console.log("Queimando uma rosquinha . . .");
})