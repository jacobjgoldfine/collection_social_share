const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_description: {
            type: DataTypes.STRING,
        },
        item_image: {
            type: DataTypes.STRING,
        },
        collection_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'collection',
                key: 'id',
            },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
    }
);

module.exports = Item;