const router = require('express').Router();
<<<<<<< HEAD
=======

>>>>>>> af1d83936a53d3e58cfb8d4eae833781638cfcb4
const collectionsRoutes = require("./collectionRoutes")
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');

router.use('/collections', collectionsRoutes);
router.use('/items', itemRoutes);
router.use('/users', userRoutes);


module.exports = router;
