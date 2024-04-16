'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Variant.belongsTo(models.Motor, { foreignKey: 'motorID' });
      Variant.hasMany(models.VariantColor, { foreignKey: 'variantID' });
    }
  }
  Variant.init({
    motorID: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Variant',
  });
  return Variant;
};