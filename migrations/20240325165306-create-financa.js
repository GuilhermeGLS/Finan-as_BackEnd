'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        validate:{
          notEmpty: {msg: "Campo date não pode estar vazio"}
        }
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          notEmpty:{msg:"Campo categoria não pode ser vazio"}
        },
        references:{
          model:"Categoria",
          key:"id"
        },
        onUptade:'cascade',
        onDelete:'cascade'
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Financas');
  }
};