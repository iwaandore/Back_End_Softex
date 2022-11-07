const Sequelize = require('sequelize');

const sequelize = new Sequelize('softex', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



sequelize.authenticate().then(function () {
    console.log("Conexão realizada com sucesso!")
}).catch(function (err) {
    console.log("Erro ao realizar a conexão: " + err);
});