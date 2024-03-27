// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como módulo 
// Como [module.exports], é possível exportar funções, objetos, variáveis, etc... Para serem usados em outras partes do projeto.
module.exports = {

  // Criar a tabela "AboutsCompanies" com as colunas implementadas abaixo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AboutsCompanies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      situationAboutId: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 2, // Define uma situação padrão
        references: { model: 'SituationsAbouts', key: 'id' } // Define a que tabela essa chave estrangeira faz referência
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AboutsCompanies');
  }
};