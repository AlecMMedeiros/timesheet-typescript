'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_activities', {
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
      hourId: {
        allowNull: false,
        primaryKey: true,
        field: 'activity_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'activities',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('users_activities');
  }
};