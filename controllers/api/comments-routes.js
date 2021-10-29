const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../util/auth');

router.get('/', async (req, res) => {
  try {
    const commentData = await Category.findAll({
      include: [User],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      include: [{model: User}],
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;

