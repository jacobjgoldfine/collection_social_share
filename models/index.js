const User = require("./User");
const Collection = require("./Collection");
const Item = require("./Item");
//const { Model } = require("sequelize/types");

User.hasMany(Collection, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Collection.belongsTo(User, {
    foreignKey: 'user_id',
});

Collection.hasMany(Item, {
    foreignKey: 'collection_id',
    onDelete: 'CASCADE',
});

Item.belongsTo(Collection, {
    foreignKey: 'collection_id',
});

module.exports = { User, Collection, Item };