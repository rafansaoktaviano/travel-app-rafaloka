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
      "hotel_facilities",
      [
        {
          facilities: "Swimming Pool",
          icons: "Swimming Pool icons",
        },
        {
          facilities: "Gymasium",
          icons: "Gymnasium icons",
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
    await queryInterface.bulkDelete('hotel_facilities', null, {});
  },
};
