'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethods extends Model {
    static associate(models) {
      // define association here
    }
  }
  PaymentMethods.init({
    account_no: DataTypes.BIGINT,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    cvc: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PaymentMethods',
    tableName: 'payment_methods',
    underscored: true
  });
  return PaymentMethods;
};