const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../util/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('index', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// router.get('/', async (req, res) => {
//   //TODO: Add a comment describing the purpose of the render method
//     res.render('index');
//   });

  router.get('/activities', async (req, res) => {
    //TODO: Add a comment describing the purpose of the render method
      res.render('activities');
    });

    router.get('/final', async (req, res) => {
      //TODO: Add a comment describing the purpose of the render method
        res.render('final');
      });
      
    
module.exports = router;
