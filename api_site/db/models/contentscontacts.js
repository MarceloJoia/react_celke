'use strict';
const { Model } = require('sequelize');

// Criar uma constate do tipo Objeto para receber a Model
module.exports = (sequelize, DataTypes) => {
  class ContentsContacts extends Model {
    /**
    * Método auxiliar para definir associações.
    * Este método não faz parte do ciclo de vida do Sequelize.
    * O arquivo `models/index` chamará este método automaticamente.
    */
    static associate(models) {
      // define association here
    }
  }
  ContentsContacts.init({
    titleContact: DataTypes.STRING,
    descContact: DataTypes.STRING,
    iconCompany: DataTypes.STRING,
    titleCompany: DataTypes.STRING,
    descCompany: DataTypes.STRING,
    iconAddress: DataTypes.STRING,
    titleAddress: DataTypes.STRING,
    descAddress: DataTypes.STRING,
    iconEmail: DataTypes.STRING,
    titleEmail: DataTypes.STRING,
    descEmail: DataTypes.STRING,
    titleForm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentsContacts',
  });
  return ContentsContacts;
};