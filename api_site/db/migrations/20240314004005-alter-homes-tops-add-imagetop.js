'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Acrescentar nova coluna na tabela HomesTops
    await queryInterface.addColumn('HomesTops', 'imageTop', {
      type: Sequelize.DataTypes.STRING,
      after: "textBtnTop"
    });
  },

  // Executar down - rollback - permite que seja desfeito a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.removeColumn('HomesTops', 'imageTop');
  }
};
