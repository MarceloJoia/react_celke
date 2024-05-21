// Nomalizar o código para evitar gambiarras
'use strict';

// Criar uma constante do tipo objeto para receber a Model
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContactsMsgs extends Model {
    /**
    * Método auxiliar para definir associações.
    * Este método não faz parte do ciclo de vida do Sequelize.
    * O arquivo `models/index` chamará este método automaticamente.
    */
    static associate(models) {
      // define association here
    }
  }
  ContactsMsgs.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    subject: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ContactsMsgs',
  });

  return ContactsMsgs;
};