'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({type_rooms, hotel,room_facilities,booking, room_images}) {

      // define association here
      this.belongsTo(type_rooms, {foreignKey: 'type_rooms_id'})
      this.belongsTo(hotel, {foreignKey: 'hotel_id'})
      this.belongsToMany(room_facilities, {through: 'rooms_has_room_facilities', foreignKey: 'rooms_id'})
      this.hasMany(booking, {foreignKey: 'rooms_id'})
      this.belongsTo(room_images, {foreignKey: 'rooms_images_id'})


    }
  }
  rooms.init({
    price: DataTypes.INTEGER,
    max_person: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
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
    modelName: 'rooms',
  });
  return rooms;
};