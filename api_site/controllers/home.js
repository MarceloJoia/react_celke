// incluir as bibliotécas
// Gerencia as requisiçãoes, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Incluir os aquivos que possui a conexão com o banco de dados
const db = require('./../db/models');

// Chama a função express
// [Router()] Quando add o Router() estou executando apenas o gerenciador de rotas. E quando add apenas express(), estou executando tudo dento do express.
const router = express.Router();

// Criar a rota visualizar os dados da página home com método get
// Endereço para acessar através da aplicação externa: http://localhost:8080/home
router.get('/', async (req, res) => {

    // Recuperar oas registros do banco de dados
    const homesTops = await db.HomesTops.findOne({

        // Indicar as colunas que devem serem carregadas
        attributes: ['titleOneTop', 'titleTwoTop', 'titleThreeTop', 'linkBtnTop', 'textBtnTop', 'imageTop'],
        // Acrescentando condição para indicar qual registro dev ser retornado dpo Banco dedados.
        // where: { id: 10 },
    });
    // res.send('Conteúdo da página inicial!');
    // console.log(homesTops);

    // Acessar o IF se encontrar o registro no banco de dados.
    if (homesTops) {
        return res.json({
            error: false,
            homesTops
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Não foi encontrado o conteúdo da página home do site."
        });
    }

});

// Exportar o que está na constante [router].
// Exportando como "module" eu posso usar em outros locais da aplicação.
module.exports = router;