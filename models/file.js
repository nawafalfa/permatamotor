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
    motorID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'motorID cannot be empty'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'title cannot be empty'
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'url cannot be empty'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'type cannot be empty'
        }
      }
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['MAIN', 'THUMBNAIL', 'FIRST']],
          msg: "Remark must be 'MAIN', 'THUMBNAIL' or 'FIRST'"
        },
        notEmpty: {
          msg: 'Remark cannot be empty'
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