// incluir as bibliotécas
// Gerencia as requisiçãoes, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Incluir os aquivos que possui a conexão com o banco de dados
const db = require('../db/models');

// Chama a função express Router
const router = express.Router();

// Criar a rota visualizar os dados da página Contato "ContentsContacts" com método get
// Endereço para acessar api através da aplicação externa: http://localhost:8080/contents-contacts
router.get('/', async (req, res) => {
    // Recuperar os registros do banco de dados
    const contentsContacts = await db.ContentsContacts.findOne({

        // Indicar as colunas que devem serem carregadas
        attributes: [
            'titleContact', 'descContact', 'iconCompany', 'titleCompany', 'descCompany', 'iconAddress', 'titleAddress', 'descAddress', 'iconEmail', 'titleEmail', 'descEmail', 'titleForm'
        ],

        // Acrescentar condição para dizer quais registros devem ser retornados do banco dos dados
        // where: { id: 100 },
    });

    // Acessar o IF se encontrar o registro no banco de dados.
    if (contentsContacts) {
        return res.json({
            error: false,
            contentsContacts
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi encontrado o conteúdo da página de contato!"
        });
    }
});

// Exportar o que está na constante [router].
// Exportando como "module" eu posso usar em outros locais da aplicação.
module.exports = router;