module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        display_name: 'João Almeida',
        email: 'user1@teste.com',
        password: '12345678'
      },
      {
        id: 2,
        display_name: 'Pedro José',
        email: 'user2@teste.com',
        password: '12345678'
      },
    ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
