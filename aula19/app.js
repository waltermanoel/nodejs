const express = require("express")
const app = express()
const handlebars = require("express-handlebars")

// Exportando o sequelize

const Sequelize = require("sequelize") 

// Conectando com o mysql usando o sequelize

const sequelize = new Sequelize("teste", "root", "mogno", {
    host: "localhost", 
    dialect: "mysql"
})

// Config
    // Template Engine
        app.engine("handlebars", handlebars({defaultLayout: "main"}))
        app.set("view engine", "handlebars")

app.listen(8081, function(){
    console.log("Servidor rodando!")
})
