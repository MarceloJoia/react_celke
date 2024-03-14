'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Cria a tabela HomesTops
    await queryInterface.createTable('HomesTops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titleOneTop: {
        type: Sequelize.STRING
      },
      titleTwoTop: {
        type: Sequelize.STRING
      },
      titleThreeTop: {
        type: Sequelize.STRING
      },
      titleBtnTop: {
        type: Sequelize.STRING
      },
      textBtnTop: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  // Executar down - rollback - permite que seja desfeito a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.dropTable('HomesTops');
  }
};
