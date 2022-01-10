const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'Qpalzm@321', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;