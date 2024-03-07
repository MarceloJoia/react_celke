// 1) Criar a constante [express] e fazer a requisição do expess
const express = require("express");

// 2) Criar a constante routes, chamanda a função expess e passando a função Routes().
const router = express.Router();

// 3) Criar a rota do tipo POST
// Criar a rota CADASTRAR com método POST
router.post('/', (req, res) => {
    res.send("Cadastrar mensagem de contato");
});

// Exportar a rota 
module.exports = router;