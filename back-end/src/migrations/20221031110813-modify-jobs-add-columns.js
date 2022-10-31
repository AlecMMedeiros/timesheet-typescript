'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('jobs', 'estimated_hours', {
      type: Sequelize.TIME,
      allowNull: false,   
    })

  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('jobs');
  }
};
