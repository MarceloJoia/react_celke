// incluir as bibliotécas
// Gerencia as requisiçãoes, rotas e URLs, entre outras funcionalidades
const express = require("express");

// Incluir os aquivos que possui a conexão com o banco de dados
const db = require('../db/models');

// Chama a função express
const router = express.Router();

// Criar a rota visualizar os dados da página Sobre a Companhia "AboutsCompanies" com método get
// Endereço para acessar api através da aplicação externa: http://localhost:8080/about-companies
router.get('/', async (req, res) => {

    // Recuperar os registros do banco de dados
    const aboutsCompanies = await db.AboutsCompanies.findAll({

        // Indicar as colunas que devem serem carregadas
        attributes: [
            'id', 'title', 'description', 'image', 'situationAboutId',
        ],

        // Buscar dados na tabela secundária
        include: [{
            model: db.SituationsAbouts,
            attributes: ['nameSituation']
        }],

        // Ordenar os registros pela coluna id na forma decrescente
        // Link:  https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#ordering-eager-loaded-associations
        order: [['id', 'DESC']],

        // Acrescentar condição para dizer quais registros devem ser retornados do banco dos dados
        where: { situationAboutId: 1 },
    });

    // Acessar o IF se encontrar o registro no banco de dados.
    if (aboutsCompanies) {
        return res.json({
            error: false,
            aboutsCompanies
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Nenhum registro Sobre a empresa encontrado!"
        });
    }
});

// Exportar o que está na constante [router].
// Exportando como "module" eu posso usar em outros locais da aplicação.
module.exports = router;