// Normalizar o código para evitar gambiarras
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o Objeto com módulo
module.exports = {

  // Criar a tabela "ContactsMsgs" com as colunas implementadas a baixo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactsMsgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Executar a Rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ContactsMsgs');
  }
};