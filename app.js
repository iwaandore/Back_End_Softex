const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const cadastrado = require('./models/cadastro');


//app.use(express.static('public'))

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ defaultLayout: 'main' }))

app.get('/cad-form', (req, res) => {
    res.render('form')
})

app.post('/add-form', function (req, res) {
    cadastrado.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        genero: req.body.OPCAO,
        data_nascimento: req.body.data,
        telefone: req.body.telefone,
        email: req.body.email


    }).then(function () {
        alert('Cadastrado com Sucesso!')
    }).catch(function (erro) {
        alert('Erro: Cadastro não foi realizado com sucesso!' + erro)
    })
})

app.get('/cadastrado', (req, res) => {
    res.render('t2')
})



app.listen(8080);