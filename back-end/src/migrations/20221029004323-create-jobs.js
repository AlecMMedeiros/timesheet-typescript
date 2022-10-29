'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title:{
        type: Sequelize.STRING,
      },
      description:{
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('jobs');
  }
};
