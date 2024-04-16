'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      File.belongsTo(models.Motor, { foreignKey: 'motorID' });
    }
  }
  File.init({
    motorID: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['MAIN', 'THUMBNAIL', 'FIRST']],
          msg: "remark must be 'MAIN', 'THUMBNAIL' or 'FIRST'"
        }
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};