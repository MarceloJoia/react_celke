// Normatizar o código para evitar gambiarras
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportando o objecto como modulo
// Com o modulo.exports é possível exportar fuções, objectos, variáveis, etc... para serem usadas e outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "homesTops"
  async up(queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [
      {
        titleOneTop: 'Temos a solução',
        titleTwoTop: 'que a sua empresa precisa',
        titleThreeTop: 'Podedomos ajudar a sua empresa',
        linkBtnTop: 'http://localhost:8080/contact',
        textBtnTop: 'Entre em Contato',
        imageTop: 'banner_top_v5.jpg',
        createdAt: new Date(), //Pega a Data Atual
        updatedAt: new Date(), //Pega a Data Atual
      },
    ]);
  },

  // Limpar os registros da tabela "HomesTops"
  async down(queryInterface) {
    await queryInterface.bulkDelete('HomesTops', null, {});
  }
};
