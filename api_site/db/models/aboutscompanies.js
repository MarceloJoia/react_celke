// Normatizar o código, ajuda a evitar gambiarra
'use strict';

// Criar a constate do tipo objeto para receber a Model
const { Model } = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  // Cria a classe com o nome da tabela "AboutsCompanies" e usa extends para trabalhar com herança
  class AboutsCompanies extends Model {
    /**
    * Método auxiliar para definir associações.
    * Este método não faz parte do ciclo de vida do Sequelize.
    * O arquivo `models/index` chamará este método automaticamente.
    */

    // Cria o relacionamento entre as tabelas 
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODEL pode manipular
  AboutsCompanies.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    situationAboutId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AboutsCompanies',
  });

  // Retorna a classe AboutsCompanies
  return AboutsCompanies;
};