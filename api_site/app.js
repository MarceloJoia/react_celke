// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();

// Criar o middleware parar receber os dados do corpo da requisição
app.use(express.json());

// Testar a conexão com o banco de dados
// const db = require('./db/models');

// Incluir as CONTROLLERS
const home = require("./controllers/home");
const aboutsCompanies = require("./controllers/aboutsCompanies");
const contentsContacts = require("./controllers/contentsContacts");
const contactMessage = require("./controllers/contactMessage");

// Cria as rotas
app.use('/home', home);
app.use('/about-companies', aboutsCompanies);
app.use('/contents-contacts', contentsContacts);
app.use('/contact-message', contactMessage);

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});
