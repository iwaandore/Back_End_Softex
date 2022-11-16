const Sequelize = require('sequelize');
const sequelize = new Sequelize('softex', 'root', '', { dialect: 'mysql', host: 'localhost' });

sequelize.authenticate().then(function () {
    console.log("conexão realiazda com sucesso")
}).catch(function (error) {
    console.log("não está pegando" + error)
})
