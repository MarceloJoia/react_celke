// Normatizar o código, ajuda a evitar gambiarra
'use strict';

// Criar a constate do tipo objeto para receber a Model
const { Model } = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  // Cria a classe com o nome da tabela "HomesServices" e usa extends para trabalhar com herança
  class HomesServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Cria o relacionamento entre as tabelas 
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODEL pode manipular
  HomesServices.init({
    servTitle: DataTypes.STRING,
    servIconOne: DataTypes.STRING,
    servTitleOne: DataTypes.STRING,
    servDescOne: DataTypes.STRING,
    servIconTwo: DataTypes.STRING,
    servTitleTwo: DataTypes.STRING,
    servDescTwo: DataTypes.STRING,
    servIconThree: DataTypes.STRING,
    servTitleThree: DataTypes.STRING,
    servDescThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesServices',
  });

  // Retorna a classe HomesServices
  return HomesServices;
};