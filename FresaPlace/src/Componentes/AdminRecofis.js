'use strict';
const {Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  class AdminRecofis extends Model {
    
    static associate(models) {

    }
  }
  AdminRecofis.init({

    Nombre_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo_AdminRecofis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    Contraseña_AdminRecofis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  }, {
    sequelize,
    modelName: 'AdminRecofis',
    tableName: 'adminRecofis',
    timestamps: true,
  });
  return AdminRecofis;
};