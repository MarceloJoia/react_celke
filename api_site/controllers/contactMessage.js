// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('../db/models');
// Chamar a função express
const router = express.Router();

// Criar a rota cadastrar com método post
// Endereço para acessar através da aplicação externa: http://localhost:8080/contact-message

// A aplicação externa deve indicar que está enviado os dados em formato de objeto: Content-Type: application/json


// 3) Criar a rota do tipo POST
// Criar a rota CADASTRAR com método POST
router.post("/", async (req, res) => {
    // Recebe os dados enviados no corpo do e-mail
    var data = req.body;
    // console.log(data);

    // Salvar os dados que está vindo através da requisição formulário
    await db.ContactsMsgs.create(data)
        .then((dataContactsMsgs) => {
            return res.json({
                error: false,
                message: "Mensagem cadastrada com sucesso!",
                dataContactsMsgs
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro: Mensagem não cadastrada com sucesso!"
            });
        });
});

// Exportar a rota 
module.exports = router;