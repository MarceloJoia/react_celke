// Normatizar o codigo, ajuda evitar gambiarras
'use strict';

// Cria a constanete do tipo objeto para receber a Models
const {
  Model
} = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  // Cria a classe com o nome da tabela "HomesTops" e usa extends para trabalhar com herança
  class HomesTops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // Criar o relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODEL ode manipular
  HomesTops.init({
    titleOneTop: DataTypes.STRING,
    titleTwoTop: DataTypes.STRING,
    titleThreeTop: DataTypes.STRING,
    linkBtnTop: DataTypes.STRING,
    textBtnTop: DataTypes.STRING,
    imageTop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesTops',
  });

  // Retorna a classe HomesTops
  return HomesTops;
};