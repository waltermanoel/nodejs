const Sequelize = require("sequelize") 
const sequelize = new Sequelize("teste", "root", "mogno", {
    host: "localhost", 
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

// Postagem 

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*Postagem.create({
    titulo: "HTML",
    conteudo: "HTML é uma liguagem de marcação para Web."
})*/


// Usuários

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    }, 
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }, 
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Walter",
    sobrenome: "Manoel",
    idade: 17,
    email: "waltermanoel@gamil.com"
})

// Usuario.sync({force: true})
