'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sounding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sounding.belongsTo(models.VesselTank, { foreignKey: 'tankId' })
    }
  }
  Sounding.init({
    sounding: DataTypes.FLOAT,
    capacity: DataTypes.FLOAT,
    tankId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sounding',
  });
  return Sounding;
};