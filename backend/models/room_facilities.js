'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({rooms}) {
      // define association here
      this.belongsToMany(rooms, {through: 'rooms_has_room_facilities', foreignKey: 'room_facilities_id'})

    }
  }
  room_facilities.init({
    facilities: DataTypes.STRING,
    icons: DataTypes.STRING,
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
    modelName: 'room_facilities',
  });
  return room_facilities;
};