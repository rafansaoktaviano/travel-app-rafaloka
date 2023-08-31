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
      "room_facilities",
      [
        {
          facilities: "Air Conditioner",
          icons: " Air Conditioner ICON",
        },
        {
          facilities: "Water Heater",
          icons: " Water Heater ICON",
        },
        {
          facilities: "Free Drinks & Food",
          icons: " Drinks & Food ICON",
        },
        {
          facilities: "Bathhub",
          icons: "Bathhub ICONS",
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
     await queryInterface.bulkDelete('room_facilities', null, {});
  },
};
