//Módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require ('mongoose')
const session = require('express-session')
const flash = require('connect-flash')


// Configurações

    //Sessão
        app.use(session ({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    
    //middleware
    app.use((req, res, next) =>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    
    //Mongoose
    
        mongoose.connect("mongodb+srv://lucas:8527Sorvete@cluster0.kcgdytk.mongodb.net/?retryWrites=true&w=majority").then(() =>{
            console.log("queimando uma rosquinha conectado ao Mongo . . .");
        }).catch((erro) =>{
            console.log("Erro ao se conectar: "+erro);
        })


    //Public
        app.use(express.static(path.join(__dirname, "public")))
        
//Rotas
app.get('/', (req,res) =>{
    res.send("Rota principal")
})

app.use('/admin', admin) 


//Outros
app.listen(8081, () =>{
    console.log("Queimando uma rosquinha . . .");
})