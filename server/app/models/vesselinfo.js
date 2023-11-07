'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VesselInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      VesselInfo.belongsTo(models.Vessel, { targetKey: 'phoneNumber', foreignKey: 'phoneNumber' })
    }
  }
  VesselInfo.init({
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: "Phone Number is required"
        },
        notEmpty: {
          msg: "Phone Number is required"
        },
      },
      references: {
        model: {
          tableName: "Vessels"
        },
        key: "phoneNumber"
      },
    },
    deviceId: DataTypes.STRING,
    vesselId: DataTypes.INTEGER,
    statusPower: DataTypes.FLOAT,
    statusSignal: DataTypes.FLOAT,
    v0Tank1: DataTypes.FLOAT,
    v0Tank2: DataTypes.FLOAT,
    v0Tank3: DataTypes.FLOAT,
    v0Tank4: DataTypes.FLOAT,
    v0Tank5: DataTypes.FLOAT,
    v0Tank6: DataTypes.FLOAT,
    v0Tank7: DataTypes.FLOAT,
    v0Tank8: DataTypes.FLOAT,
    v2Tank1: DataTypes.FLOAT,
    v2Tank2: DataTypes.FLOAT,
    v2Tank3: DataTypes.FLOAT,
    v2Tank4: DataTypes.FLOAT,
    v2Tank5: DataTypes.FLOAT,
    v2Tank6: DataTypes.FLOAT,
    v2Tank7: DataTypes.FLOAT,
    v2Tank8: DataTypes.FLOAT,
    h0Tank1: DataTypes.FLOAT,
    h0Tank2: DataTypes.FLOAT,
    h0Tank3: DataTypes.FLOAT,
    h0Tank4: DataTypes.FLOAT,
    h0Tank5: DataTypes.FLOAT,
    h0Tank6: DataTypes.FLOAT,
    h0Tank7: DataTypes.FLOAT,
    h0Tank8: DataTypes.FLOAT,
    h2Tank1: DataTypes.FLOAT,
    h2Tank2: DataTypes.FLOAT,
    h2Tank3: DataTypes.FLOAT,
    h2Tank4: DataTypes.FLOAT,
    h2Tank5: DataTypes.FLOAT,
    h2Tank6: DataTypes.FLOAT,
    h2Tank7: DataTypes.FLOAT,
    h2Tank8: DataTypes.FLOAT,
    RPM1: DataTypes.FLOAT,
    RPM2: DataTypes.FLOAT,
    date: DataTypes.STRING,
    time: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    NSIndicator: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    EWIndicator: DataTypes.STRING,
    speed0: DataTypes.FLOAT,
    speed2: DataTypes.FLOAT,
    pitch: DataTypes.FLOAT,
    roll: DataTypes.FLOAT,
    DFM1: DataTypes.FLOAT,
    DFM2: DataTypes.FLOAT,
    imei: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'VesselInfo',
  });
  return VesselInfo;
};