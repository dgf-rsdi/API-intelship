'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VesselInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: "Vessels",
          },
          key: "phoneNumber",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      deviceId: {
        type: Sequelize.STRING
      },
      statusPower: {
        type: Sequelize.FLOAT
      },
      statusSignal: {
        type: Sequelize.FLOAT
      },
      v0Tank1: {
        type: Sequelize.FLOAT
      },
      v0Tank2: {
        type: Sequelize.FLOAT
      },
      v0Tank3: {
        type: Sequelize.FLOAT
      },
      v0Tank4: {
        type: Sequelize.FLOAT
      },
      v0Tank5: {
        type: Sequelize.FLOAT
      },
      v0Tank6: {
        type: Sequelize.FLOAT
      },
      v0Tank7: {
        type: Sequelize.FLOAT
      },
      v0Tank8: {
        type: Sequelize.FLOAT
      },
      v2Tank1: {
        type: Sequelize.FLOAT
      },
      v2Tank2: {
        type: Sequelize.FLOAT
      },
      v2Tank3: {
        type: Sequelize.FLOAT
      },
      v2Tank4: {
        type: Sequelize.FLOAT
      },
      v2Tank5: {
        type: Sequelize.FLOAT
      },
      v2Tank6: {
        type: Sequelize.FLOAT
      },
      v2Tank7: {
        type: Sequelize.FLOAT
      },
      v2Tank8: {
        type: Sequelize.FLOAT
      },
      h0Tank1: {
        type: Sequelize.FLOAT
      },
      h0Tank2: {
        type: Sequelize.FLOAT
      },
      h0Tank3: {
        type: Sequelize.FLOAT
      },
      h0Tank4: {
        type: Sequelize.FLOAT
      },
      h0Tank5: {
        type: Sequelize.FLOAT
      },
      h0Tank6: {
        type: Sequelize.FLOAT
      },
      h0Tank7: {
        type: Sequelize.FLOAT
      },
      h0Tank8: {
        type: Sequelize.FLOAT
      },
      h2Tank1: {
        type: Sequelize.FLOAT
      },
      h2Tank2: {
        type: Sequelize.FLOAT
      },
      h2Tank3: {
        type: Sequelize.FLOAT
      },
      h2Tank4: {
        type: Sequelize.FLOAT
      },
      h2Tank5: {
        type: Sequelize.FLOAT
      },
      h2Tank6: {
        type: Sequelize.FLOAT
      },
      h2Tank7: {
        type: Sequelize.FLOAT
      },
      h2Tank8: {
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
      speed0: {
        type: Sequelize.FLOAT
      },
      speed2: {
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
    await queryInterface.dropTable('VesselInfos');
  }
};