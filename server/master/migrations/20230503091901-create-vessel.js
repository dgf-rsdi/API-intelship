'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vessels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      vesselNumber: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      imei: {
        type: Sequelize.STRING
      },
      productionYear: {
        type: Sequelize.INTEGER
      },
      deviceid: {
        type: Sequelize.STRING
      },
      fueltank1: {
        type: Sequelize.FLOAT
      },
      fueltank2: {
        type: Sequelize.FLOAT
      },
      fueltank3: {
        type: Sequelize.FLOAT
      },
      fueltank4: {
        type: Sequelize.FLOAT
      },
      fueltank5: {
        type: Sequelize.FLOAT
      },
      fueltank6: {
        type: Sequelize.FLOAT
      },
      fueltank7: {
        type: Sequelize.FLOAT
      },
      fueltank8: {
        type: Sequelize.FLOAT
      },
      RPM1: {
        type: Sequelize.FLOAT
      },
      RPM2: {
        type: Sequelize.FLOAT
      },
      DFM1: {
        type: Sequelize.FLOAT
      },
      DFM2: {
        type: Sequelize.FLOAT
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Companies",
          },
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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