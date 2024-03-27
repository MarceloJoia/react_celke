// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como módulo 
// Como [module.exports], é possível exportar funções, objetos, variáveis, etc... Para serem usados em outras partes do projeto.
module.exports = {

  // Criar a tabela SituationsAbouts com as colunas implementadas abaixo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SituationsAbouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameSituation: {
        type: Sequelize.STRING
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

  // Executar rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.dropTable('SituationsAbouts');
  }
};