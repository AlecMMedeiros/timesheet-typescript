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
        allowNull: false,
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      os:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      published: {        
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
