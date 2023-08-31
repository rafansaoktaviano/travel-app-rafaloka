'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users, rooms}) {
      // define association here
      this.belongsTo(users, {foreignKey: 'users_id'})
      this.belongsTo(rooms, {foreignKey: 'rooms_id'})
    }
  }
  booking.init({
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
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
    modelName: 'booking',
  });
  return booking;
};