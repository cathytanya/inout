const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.get('*', (req, res) => { 
    res.render('homepage');
  })

module.exports = router;
