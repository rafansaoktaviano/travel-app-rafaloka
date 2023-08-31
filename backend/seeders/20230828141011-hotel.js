"use strict";

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
      "hotels",
      [
        {
          hotel_name: "Hotel Sare",
          location: "Bandung Cimahi",
          rating: 4,
          email: "rafansa@gmail.com",
          phone: "08124312",
          description: "best hotel at Bandung",
          city_id:   14,
        }
        // ,
        // {
        //   hotel_name: "Starlet Hotel BSD City Tangerang",
        //   location: "Jl. BSD Boulevard Utara, Lengkong Kulon, Kec. Pagedangan, Kabupaten Tangerang, Banten 15331",
        //   rating: 5,
        //   email: "raka@gmail.com",
        //   phone: "08124312",
        //   description: "best hotel at Tanggerang",
        //   city_id:   13,
        // },
        // {
        //   hotel_name: "Hilton Garden Inn Jakarta Taman Palem",
        //   location: "Jl. Taman Palem Lestari No.1, Cengkareng Bar., Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730",
        //   rating: 5,
        //   email: "anggoro@gmail.com",
        //   phone: "08124312",
        //   description: "best hotel at Jakarta",
        //   city_id:   15,
        // },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("hotels", null, {});

  },
};