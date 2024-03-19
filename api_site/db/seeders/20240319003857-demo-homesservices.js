// Normatizar o código para evitar gambiarras
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportando o objecto como modulo
// Com o modulo.exports é possível exportar fuções, objectos, variáveis, etc... para serem usadas e outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "HomesServices"
  async up(queryInterface) {

    return queryInterface.bulkInsert('HomesServices', [
      {
        servTitle: 'Serviços',
        servIconOne: 'fa-solid fa-wifi',
        servTitleOne: 'Wifi veloz',
        servDescOne: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',

        servIconTwo: 'fa-solid fa-rocket',
        servTitleTwo: 'Espaço espirador',
        servDescTwo: 'Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',

        servIconThree: 'fa-solid fa-handshake',
        servTitleThree: 'Reunião',
        servDescThree: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // Limpa os registros da tabela "HomesServices"
  async down(queryInterface) {
    await queryInterface.bulkDelete('HomesServices', null, {});
  }
};
