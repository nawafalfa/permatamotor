'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VariantColors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motorID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Motors',
          },
          key: 'id'
        }
      },
      variantID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Variants',
          },
          key: 'id'
        }
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VariantColors');
  }
};