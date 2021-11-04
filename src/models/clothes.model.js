'use strict';

const sequelize = require('sequelize');
const { DataTypes } = require('sequelize'); 
const Clothes = (sequelize) => sequelize.define('Clothes', {
    Brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Size: {
        type: DataTypes.STRING,
    }
});
module.exports = Clothes;