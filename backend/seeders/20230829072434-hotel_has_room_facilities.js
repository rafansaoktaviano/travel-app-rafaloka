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
      "hotel_has_hotel_facilities",
      [
        {
          hotel_id: 4,
          hotel_facilities_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hotel_id: 5,
          hotel_facilities_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hotel_id: 5,
          hotel_facilities_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hotel_id: 6,
          hotel_facilities_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hotel_id: 6,
          hotel_facilities_id: 2,
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
     await queryInterface.bulkDelete('hotel_has_hotel_facilities', null, {});
  },
};
