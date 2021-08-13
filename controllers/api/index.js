const router = require('express').Router();
const collectionsRoutes = require("./collectionRoutes")
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');

router.use('/collections', collectionsRoutes);
router.use('/items', itemRoutes);
router.use('/users', userRoutes);

module.exports = router;
