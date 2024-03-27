// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Cria a constanete do tipo objeto para receber a Models
const { Model } = require('sequelize');

// Exportar a função como modulo
module.exports = (sequelize, DataTypes) => {

  // Cria a classe com o nome da tabela "SituationsAbouts" e usa extends para trabalhar com herança
  class SituationsAbouts extends Model {
    /**
     * Método auxiliar para definir associações.
     * Este método não faz parte do ciclo de vida do Sequelize.
     * O arquivo `models/index` chamará este método automaticamente.
    */

    // Criar o relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODEL ode manipular
  SituationsAbouts.init({
    nameSituation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SituationsAbouts',
  });

  // Retorna a classe SituationsAbouts
  return SituationsAbouts;
};