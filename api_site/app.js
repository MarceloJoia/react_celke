// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Testar a conexão com o banco de dados
// const db = require('./db/models');

// Incluir as CONTROLLERS
const home = require("./controllers/home");
const aboutsCompanies = require("./controllers/AboutsCompanies");
const contactMesage = require("./controllers/contactMesage");

// Cria as rotas
app.use('/home', home);
app.use('/about-companies', aboutsCompanies);
app.use('/contact-mesage', contactMesage);

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});
