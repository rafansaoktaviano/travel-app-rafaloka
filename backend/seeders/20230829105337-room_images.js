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
      "room_images",
      [
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipN2t4ma7MtvPPC0eMSVfIgcn_iS4zuaJp8-Whnb=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipPZzAAa6UTODb5E-nSCNRorkhw0FKARtNrc9ok0=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipMOYAPheUuzJQUVYsZmnnxCoNNcFmoBcZtqj62W=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipMOYAPheUuzJQUVYsZmnnxCoNNcFmoBcZtqj62W=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipPpkacS4O1UmvH6_NoKybG5OGVHwgx8dx4qVXMV=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh3.googleusercontent.com/p/AF1QipO5DtxyVsSUJyhsCw7L1vpRF_LPXiGotqMv3VU=w592-h404-n-k-rw-no-v1",
        },
        {
          url_image:
            "https://lh5.googleusercontent.com/p/AF1QipNFZKRvnfEpqUY1E4ZRAUE9DpPQU2HL6dC3brI=w253-h208-k-no",
        },
        {
          url_image:
            "https://lh5.googleusercontent.com/p/AF1QipOueKzWFIzq5qmoy4nM9LwVx2Z-4_wUcqXBErDX=w253-h189-k-no",
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
    await queryInterface.bulkDelete("room_images", null, {});
  },
};
