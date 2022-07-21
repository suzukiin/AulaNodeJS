const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemadecadastro', 'root', '1711', {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo : {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuario', {
    nome : {
        type: Sequelize.STRING
    },
    sobrenome : {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})

/*Postagem.create({
    titulo: "A volta dos q nao foram",
    conteudo: "muito legal man eh a volta dos brother q n foram"

})*/

Usuario.create({
    nome: "Lucas",
    sobrenome : "Suzuki",
    idade : 18
})

//Usuario.sync({force: true})
