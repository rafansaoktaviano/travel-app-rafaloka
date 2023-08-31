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
      "type_rooms",
      [
        {
          type: "Single Bed",
        },
        {
          type: "Double Bed",
        },
        {
          type: "Queen",
        },
        {
          type: "King",
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
    await queryInterface.bulkDelete("type_rooms", null, {});
  },
};
