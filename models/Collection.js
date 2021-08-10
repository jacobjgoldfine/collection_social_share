const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model{}

Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          col_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        col_description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'collection',
      }
);

module.exports = Collection;