const Sequelize = require('sequelize');
const connection = require('./database');

//Definindo o model e os campos da tabela
//O model é uma representação da nossa tabela, escrito em javascript
const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});


//Passando model paro o banco de dados
Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada!");
});

module.exports = Pergunta;
