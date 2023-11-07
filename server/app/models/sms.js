'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sms.init({
    username: DataTypes.STRING,
    mobile: DataTypes.STRING,
    message: DataTypes.STRING,
    auth: DataTypes.STRING,
    trxID: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sms',
  });
  return Sms;
};