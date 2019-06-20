'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      T1value: {
        type: Sequelize.DECIMAL
      },
      T1points: {
        type: Sequelize.INTEGER
      },
      T2value: {
        type: Sequelize.DECIMAL
      },
      T2points: {
        type: Sequelize.INTEGER
      },
      T3value: {
        type: Sequelize.DECIMAL
      },
      T3points: {
        type: Sequelize.INTEGER
      },
      T4value: {
        type: Sequelize.DECIMAL
      },
      T4points: {
        type: Sequelize.INTEGER
      },
      T5value: {
        type: Sequelize.DECIMAL
      },
      T5points: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teams');
  }
};