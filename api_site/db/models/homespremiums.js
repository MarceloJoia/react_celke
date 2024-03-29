// Criar a constate do tipo objeto para receber a Model
'use strict';

const { Model } = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  // Cria a classe com o nome da tabela "AboutsCompanies" e usa extends para trabalhar com herança
  class HomesPremiums extends Model {
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
  HomesPremiums.init({
    premTitle: DataTypes.STRING,
    premSubtitle: DataTypes.STRING,
    premDesc: DataTypes.TEXT,
    premBtnText: DataTypes.STRING,
    premBtnLink: DataTypes.STRING,
    premImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesPremiums',
  });

  // Retorna a classe AboutsCompanies
  return HomesPremiums;
};