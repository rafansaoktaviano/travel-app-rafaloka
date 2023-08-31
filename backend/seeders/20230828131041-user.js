"use strict";

const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rafansa",
          email: "rafansa@gmail.com",
          password: "asddsa",
          no_phone: "0812413",
          address: "Regentown B12 NO 12",
        },
        {
          name: "andre",
          email: "andre@gmail.com",
          password: "asddsa",
          no_phone: "121321412",
          address: "Regentown Gold B5 NO 20",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Example:
     * Add commands to revert seed here.
     *
     */
  },
};
