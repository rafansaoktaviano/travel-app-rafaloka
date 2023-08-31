"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "bookings",
      [
        {
          check_in: new Date(),
          check_out: new Date(),
          users_id: 1,
          rooms_id: 1,
        },
        {
          check_in: new Date(),
          check_out: new Date(),
          users_id: 2,
          rooms_id: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
     await queryInterface.bulkDelete('bookings', null, {});
  },
};
