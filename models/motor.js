'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Motor.hasMany(models.File, { foreignKey: 'motorID' });
      Motor.hasMany(models.Variant, { foreignKey: 'motorID' });
      Motor.hasMany(models.Feature, { foreignKey: 'motorID' });
      Motor.hasMany(models.Specification, { foreignKey: 'motorID' });
      Motor.hasMany(models.VariantColor, { foreignKey: 'motorID' });
    }
  }
  Motor.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    type: DataTypes.STRING,
    cc: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Motor',
  });
  return Motor;
};