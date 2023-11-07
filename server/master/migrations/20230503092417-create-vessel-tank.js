'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VesselTanks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vesselId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Vessels",
          },
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      tankName: {
        type: Sequelize.STRING
      },
      ZP: {
        type: Sequelize.FLOAT
      },
      Z1P: {
        type: Sequelize.FLOAT
      },
      ZL: {
        type: Sequelize.FLOAT
      },
      Y: {
        type: Sequelize.FLOAT
      },
      Y1P: {
        type: Sequelize.FLOAT
      },
      Y1L: {
        type: Sequelize.FLOAT
      },
      KL: {
        type: Sequelize.FLOAT
      },
      KP: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('VesselTanks');
  }
};