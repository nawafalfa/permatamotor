'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specification.belongsTo(models.Motor, { foreignKey: 'motorID' });
    }
  }
  Specification.init({
    motorID: DataTypes.STRING,
    title: DataTypes.STRING,
    label: DataTypes.STRING,
    value: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Specification',
  });
  return Specification;
};