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
      "rooms",
      [
        {
          price: 1_000_000,
          max_person: 2,
          total_room: 15,
          type_rooms_id: 1,
          hotel_id: 4,
          rooms_images_id: 1,
        },
        {
          price: 2_000_000,
          max_person: 2,
          total_room: 15,
          type_rooms_id: 2,
          hotel_id: 4,
          rooms_images_id: 2,
        },
        {
          price: 3_000_000,
          max_person: 4,
          total_room: 15,
          type_rooms_id: 3,
          hotel_id: 4,
          rooms_images_id: 3,
        },
        {
          price: 4_000_000,
          max_person: 5,
          total_room: 15,
          type_rooms_id : 4,
          hotel_id: 4,
          rooms_images_id: 4,
        },
        {
          price: 1_000_000,
          max_person: 2,
          total_room: 15,
          type_rooms_id: 1,
          hotel_id: 5,
          rooms_images_id: 5,
        },
        {
          price: 2_000_000,
          max_person: 2,
          total_room: 15,
          type_rooms_id: 2,
          hotel_id: 5,
          rooms_images_id: 6,

        },
        {
          price: 3_000_000,
          max_person: 4,
          total_room: 15,
          type_rooms_id: 3,
          hotel_id: 5,
          rooms_images_id: 7,
        },
        {
          price: 4_000_000,
          max_person: 5,
          total_room: 15,
          type_rooms_id : 4,
          hotel_id: 5,
          rooms_images_id: 8,
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
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
