const router = require('express').Router();
const { Indoor, Category } = require('../../models');

// Get all indoor activities
router.get('/', async (req, res) => {
  try {
    const indoorData = await Indoor.findAll({
      include: [{ model: Category }],
    });
    res.status(200).json(indoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get indoor activity by ID
router.get('/:id', async (req, res) => {
  try {
    const indoorData = await Indoor.findOne({
      where: { id: req.params.id },
      include: [Category],
    });
    res.status(200).json(indoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new indoor activity
router.post('/', async (req, res) => {
  try {
    const indoorData = await Indoor.create({
      activity_name: req.body.activity_name,
      category_id: req.body.category_id,
      image: req.body.image
    });
    res.status(200).json(indoorData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update indoor activity by ID
router.put('/:id', async (req, res) => {
  try {
    const indoorData = await Indoor.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!indoorData[0]) {
      res.status(404).json({ message: 'No indoor activity with this ID' });
    }
    res.status(200).json(indoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete indoor activity by ID
router.delete('/:id', async (req, res) => {
  const indoorData = await Indoor.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(indoorData);
});


module.exports = router;