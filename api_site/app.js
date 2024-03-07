// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require('express');

// Chamar a função express
const app = express();


// Criar a rota visualizar com método GET
// [req] recebe, [res] devolve a resposta
app.get('/', (req, res) => {
    res.send('Marcelo Tipo GET');
})

// Criar a rota CADASTRAR com método POST
app.post('/', (req, res) => {
    res.send("Cadastrar tipo POST");
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});
