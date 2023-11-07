'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VesselTank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VesselTank.belongsTo(models.Vessel, { foreignKey: 'vesselId' })
      VesselTank.hasMany(models.Sounding, { foreignKey: 'tankId' })
    }
  }
  VesselTank.init({
    vesselId: DataTypes.INTEGER,
    tankName: DataTypes.STRING,
    ZP: DataTypes.FLOAT,
    Z1P: DataTypes.FLOAT,
    ZL: DataTypes.FLOAT,
    Y: DataTypes.FLOAT,
    Y1P: DataTypes.FLOAT,
    Y1L: DataTypes.FLOAT,
    KL: DataTypes.FLOAT,
    KP: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'VesselTank',
  });
  return VesselTank;
};