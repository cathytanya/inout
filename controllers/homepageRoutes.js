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

    res.render('homepage', {
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

module.exports = router;





// ///////
// FIND THE DATA THAT YOU WANT TO RENDER
res.render

try {
  const indoorData = await Indoor.findAll({
    include: [{ model: Category }],
  });
  res.status(200).json(indoorData);
} catch (err) {
  res.status(500).json(err);
}