const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

//assigning to Express.js router
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
