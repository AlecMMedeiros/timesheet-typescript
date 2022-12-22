'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activity:{
        allowNull: false,
        type: Sequelize.STRING,     
      },
      hours: {
        allowNull: false,
        type: Sequelize.TIME,       
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,      
      },
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('activities');
  }
};
