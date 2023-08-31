const db = require("./../models");
const { sequelize } = require("../models");


module.exports = {
  search: async (req, res) => {
    try {
      const { city } = req.query;

      const findHotels = await db.hotel.findAll({
        attributes: ["hotel_name", "location"],
        include: [
          {
            model: db.city,
            attributes: ["city_name"],
            where: { city_name: city },
          },
          {
            model: db.hotel_image,
            attributes: ["url_image"],
          },
          {
            model: db.rooms,
            attributes: ["total_room"],
          },
        ],
        // group: ["hotel.id", "hotel.hotel_name", "hotel.location", "city.city_name"],
        // group: ['hotel.id']
      });
      res.status(200).send({
        isError: false,
        message: "Find Hotels Success",
        data: findHotels,
      });
    } catch (error) {
      res.status(500).send({
        isError: true,
        message: error.message,
        // data: null,
      });
    }
  },
  hotelList: async (req, res) => {
    const findHotelList = await db.hotel.findAll({
      attributes: [
        "hotel_name",
        "location",
        "rating",
        "email",
        "phone",
        "description",
      ],
      include: [
        {
          model: db.hotel_facilities,
          attributes: ["facilities"],
          through: { attributes: [] },
        },
      ],
    });

    res.send(findHotelList);
  },

  hotelDetail: async (req, res) => {
    try {
      const { id } = req.params;

      const findHotelDetails = await db.rooms.findAll({
        attributes: ["price", "max_person", "total_room"],
        include: [
          {
            model: db.hotel,
            attributes: ["hotel_name", "location", "rating"],
          },
          {
            model: db.type_rooms,
            attributes: ["type"],
          },
          {
            model: db.room_images,
            attributes: ["url_image"],
          },
        ],
        where: { hotel_id: id },
      });

      res.send(findHotelDetails);
    } catch (error) {
      console.log(error);
    }
  },
};
