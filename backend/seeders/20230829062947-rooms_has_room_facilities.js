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
      "rooms_has_room_facilities",
      [
        {
          room_facilities_id: 5,
          rooms_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 5,
          rooms_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 6,
          rooms_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 5,
          rooms_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 6,
          rooms_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 7,
          rooms_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 5,
          rooms_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 6,
          rooms_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 7,
          rooms_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          room_facilities_id: 8,
          rooms_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
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
    await queryInterface.bulkDelete("rooms_has_room_facilities", null, {});
  },
};
