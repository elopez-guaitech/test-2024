const { Sequelize } = require("sequelize");


const db = new Sequelize('mysql', process.env.MYSQL_USUARIO, process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    port: process.env.MYSQL_PORT,
    dialect: 'mysql'
})

module.exports = db;