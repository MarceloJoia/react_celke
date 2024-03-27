// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportando o objecto como modulo
// Com o modulo.exports é possível exportar fuções, objectos, variáveis, etc... para serem usadas e outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "SituationsAbouts"
  async up(queryInterface) {
    return queryInterface.bulkInsert('SituationsAbouts', [
      {
        nameSituation: 'Ativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameSituation: 'Inativo',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  // Limpa os registros da tabela "SituationsAbouts"
  async down(queryInterface) {
    await queryInterface.bulkDelete('SituationsAbouts', null, {});
  }
};
