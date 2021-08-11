const User = require("./User");
const Collection = require("./Collection");
const Item = require("./Item");

User.hasMany(Collection, {
    foreignKey: 'user_id',
});

Collection.belongsTo(User, {
    foreignKey: 'user_id',
});

Collection.hasMany(Item, {
    foreignKey: 'collection_id',
});

Item.belongsTo(Collection, {
    foreignKey: 'collection_id',
});