'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomesPremiums extends Model {

    static associate(models) {
      // define association here
    }
  }
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
  return HomesPremiums;
};