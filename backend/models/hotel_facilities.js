'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel_facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({hotel}) {
      // define association here
      this.belongsToMany(hotel, {through: 'hotel_has_hotel_facilities' ,foreignKey: 'hotel_facilities_id'})
    }
  }
  hotel_facilities.init({
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
    modelName: 'hotel_facilities',
  });
  return hotel_facilities;
};