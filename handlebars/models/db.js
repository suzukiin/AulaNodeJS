const { query } = require("express");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('postagens', 'root', '1711', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
})    

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize,
}