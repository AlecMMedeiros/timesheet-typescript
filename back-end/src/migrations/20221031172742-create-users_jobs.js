'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_jobs', {
      userId: {
        allowNull: false,
        primaryKey: true,
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      jobId: {
        allowNull: false,
        primaryKey: true,
        field: 'job_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'jobs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users_jobs');
  }
};