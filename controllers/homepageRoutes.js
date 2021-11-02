const router = require("express").Router();
const { User, Indoor, Outdoor, Category, Comment } = require("../models");
// const withAuth = require('../util/auth');

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/outdoor/:category_id", async (req, res) => {
  console.log(req.params.category_id);
  try {
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const outdoorData = await Outdoor.findAll({
      where: { category_id: req.params.category_id },
    });
    let outdoors = outdoorData.map((user) => user.get({ plain: true }));
    res.render("outdoor", { outdoors, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/outdoor", async (req, res) => {
  console.log(req.query);
  console.log(req.params);
  try {
    // user table data
    const userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    // categories table data
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const whereObject = {};

    if (req.query.category_id) {
      whereObject["id"] = req.query.category_id;
    }
    const outdoorData = await Outdoor.findAll({ where: whereObject });
    let outdoors = outdoorData.map((user) => user.get({ plain: true }));

    res.render("outdoor", { users, outdoors, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/indoor/:category_id", async (req, res) => {
  console.log(req.params.category_id);
  try {
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const indoorData = await Indoor.findAll({
      where: { category_id: req.params.category_id },
    });
    let indoors = indoorData.map((user) => user.get({ plain: true }));
    res.render("indoor", { indoors, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/indoor", async (req, res) => {
  try {
    // user table data
    const userData = await User.findAll();
    let users = userData.map((user) => user.get({ plain: true }));
    // categories table data
    const categoryData = await Category.findAll();
    let categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    const indoorData = await Indoor.findAll();
    let indoors = indoorData.map((user) => user.get({ plain: true }));

    res.render("indoor", { users, indoors, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/final", async (req, res) => {
  //look for that outdoor activity using id form parameter
  try {
    const commentData = await Comment.findAll();
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.render("final", { comments });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
