// Normalizar para evitar gambiarras
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto com Módulo
module.exports = {

  // Cadastrar os registros na Tabela "ContentsContacts"
  async up(queryInterface) {

    return queryInterface.bulkInsert('ContentsContacts', [
      {
        titleContact: 'Contato',
        descContact: 'Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.',

        iconCompany: 'fa-solid fa-user',
        titleCompany: 'Empresa',
        descCompany: 'Celke',

        iconAddress: 'fa-solid fa-location-dot',
        titleAddress: 'Endereço',
        descAddress: 'Avenida Winston Churchill',

        iconEmail: 'fa-solid fa-envelope',
        titleEmail: 'E-mail',
        descEmail: 'cesar@celke.com.br',

        titleForm: 'Mensagem de Contato',

        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  // Executar rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.bulkDelete('ContentsContacts', null, {});
  }
};
