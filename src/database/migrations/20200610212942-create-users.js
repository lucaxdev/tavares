'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false,
             
      },
      
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      datebirth: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      indication: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      rg: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      catalog1: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog2: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog3: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog4: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog5: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog6: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog7: {
        type: Sequelize.STRING(255),
        allowNull: false
      },catalog8: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      pointsupport: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cep: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      rua: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      numero: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      cidade: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      }
    });

  },

  down: (queryInterface, Sequelize) => {


    return queryInterface.dropTable('users');

  }
};
