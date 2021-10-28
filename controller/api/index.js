const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const indoorRoutes = require('./indoor-routes');
const outdoorRoutes = require('./outdoor-routes');
const userRoutes = require('./user-routes');
const commentsRoutes = require('./comments-routes');

router.use('/categories', categoryRoutes);
// router.use('/indoor', indoorRoutes);
// router.use('/outdoor', outdoorRoutes);
// router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
