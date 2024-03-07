// incluir as bibliotécas
// Gerencia as requisiçãoes, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Chama a função express
// [Router()] Quando add o Router() estou executando apenas o gerenciador de rotas. E quando add apenas express(), estou executando tudo dento do express.
const router = express.Router();

/**
 *  Crio a primeira rota.
 * Criar a rota visualizar com método GET
 * [req] recebe, 
 * [res] devolve a resposta
 */ 
router.get('/', (req, res) => {
    res.send('Conteúdo da página inicial!');
});

// Exportar o que está na constante [router]
module.exports = router;