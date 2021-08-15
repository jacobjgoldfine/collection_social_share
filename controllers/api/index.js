const router = require('express').Router();

const collectionRoutes = require("./collectionRoutes")
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');

router.use('/collection', collectionRoutes);
router.use('/item', itemRoutes);
router.use('/user', userRoutes);

module.exports = router;
