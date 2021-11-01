const router = require('express').Router();

const { User, Indoor, Outdoor, Category } = require('../models');
const withAuth = require('../util/auth');


router.get('/homepage', (req, res) => {

  res.render('homepage');
});

router.get('/', (req, res) => {
  res.redirect('/homepage')
})

router.get('/outdoor/:category_id', async (req, res) => {
  console.log(req.params.category_id)
  try {
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) => category.get({ plain: true }));

    const outdoorData = await Outdoor.findAll(
      {
        where: { category_id: req.params.category_id }
      }
    );
    let outdoors = outdoorData.map((user) => user.get({ plain: true }));

    res.render('outdoor', { outdoors, categories })

  } catch (err) {
    res.status(500).json(err);
  }

})



router.get('/outdoor', async (req, res) => {

  console.log(req.query)
  console.log(req.params)
  //TODO: Add a comment describing the purpose of the render method
  try {


    // user table data
    const userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));

    // categories table data
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) => category.get({ plain: true }));
    console.log(categories)
    const whereObject = {}
    if (req.query.category_id) {
      whereObject["id"] = req.query.category_id
    }

    const outdoorData = await Outdoor.findAll({ where: whereObject });
    let outdoors = outdoorData.map((user) => user.get({ plain: true }));

    res.render('outdoor', { users, outdoors, categories })
  } catch (err) {
    res.status(500).json(err);
  }

  // res.render('activities');
});


router.get('/indoor/:category_id', async (req, res) => {
  console.log(req.params.category_id)
  try {
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) => category.get({ plain: true }));

    const indoorData = await Indoor.findAll(
      {
        where: { category_id: req.params.category_id }
      }
    );
    let indoors = indoorData.map((user) => user.get({ plain: true }));

    res.render('indoor', { indoors, categories })

  } catch (err) {
    res.status(500).json(err);
  }

})

router.get('/indoor', async (req, res) => {
  console.log('indoor')
  console.log(req.query)
  console.log(req.params)
  //TODO: Add a comment describing the purpose of the render method
  try {

    // user table data
    const userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));

    // categories table data
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) => category.get({ plain: true }));

    const indoorData = await Indoor.findAll();
    let indoors = indoorData.map((user) => user.get({ plain: true }));

    res.render('indoor', { users, indoors, categories })
  } catch (err) {
    res.status(500).json(err);
  }


});




router.get('/login',async (req,res)=>{


  res.render('login')
})


router.get('/signup',(req,res)=>{



  res.render('signup')
})










router.get('/final/:category_id',withAuth, async (req, res) => {
  try {


    // user table data
    const userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));

    // categories table data
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) => category.get({ plain: true }));
    console.log(categories)
    const whereObject = {}
    if (req.query.category_id) {
      whereObject["id"] = req.query.category_id
    }

    const outdoorData = await Outdoor.findAll({ where: whereObject });
    let outdoors = outdoorData.map((user) => user.get({ plain: true }));
    const indoorData = await Indoor.findAll({ where: whereObject });
    let indoors = indoorData.map((user) => user.get({ plain: true }));
    console.log(indoors)
    console.log(outdoors)
    res.render('final', { users, outdoors, categories })
  } catch (err) {
    res.status(500).json(err);
  }
  res.render('final');
});


module.exports = router;





// ///////
// FIND THE DATA THAT YOU WANT TO RENDER
// res.render

// try {
//   const indoorData = await Indoor.findAll({
//     include: [{ model: Category }],
//   });
//   res.status(200).json(indoorData);
// } catch (err) {
//   res.status(500).json(err);
// }