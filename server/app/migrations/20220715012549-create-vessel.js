'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vessels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      productionYear: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companyName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deviceId: {
        type: Sequelize.STRING
      },
      vesselId: {
        type: Sequelize.INTEGER
      },
      statusPower: {
        type: Sequelize.FLOAT
      },
      statusSignal: {
        type: Sequelize.FLOAT
      },
      fuelTank1: {
        type: Sequelize.FLOAT
      },
      fuelTank2: {
        type: Sequelize.FLOAT
      },
      fuelTank3: {
        type: Sequelize.FLOAT
      },
      fuelTank4: {
        type: Sequelize.FLOAT
      },
      fuelTank5: {
        type: Sequelize.FLOAT
      },
      fuelTank6: {
        type: Sequelize.FLOAT
      },
      fuelTank7: {
        type: Sequelize.FLOAT
      },
      fuelTank8: {
        type: Sequelize.FLOAT
      },
      RPM1: {
        type: Sequelize.FLOAT
      },
      RPM2: {
        type: Sequelize.FLOAT
      },
      date: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      NSIndicator: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      EWIndicator: {
        type: Sequelize.STRING
      },
      speed: {
        type: Sequelize.FLOAT
      },
      pitch: {
        type: Sequelize.FLOAT
      },
      roll: {
        type: Sequelize.FLOAT
      },
      DFM1: {
        type: Sequelize.FLOAT
      },
      DFM2: {
        type: Sequelize.FLOAT
      },
      imei: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vessels');
  }
};