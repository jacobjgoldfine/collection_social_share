const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

=======
const collectionsRoutes = require("./collectionRoutes")
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');

router.use('/collections', collectionsRoutes);
router.use('/items', itemRoutes);
router.use('/users', userRoutes);
>>>>>>> 22592ff40737d6d93315dc3fd94ca295b6219763

module.exports = router;