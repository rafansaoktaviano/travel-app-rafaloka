'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({city, rooms, hotel_image,hotel_facilities}) {
      // define association here
      this.belongsTo(city, {foreignKey: 'city_id'})
      this.hasMany(rooms, {foreignKey: 'hotel_id'})
      this.hasMany(hotel_image, {foreignKey: 'hotel_id'})
      this.belongsToMany(hotel_facilities, {through: 'hotel_has_hotel_facilities',foreignKey: 'hotel_id'})
    }
  }
  hotel.init({
    hotel_name: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};