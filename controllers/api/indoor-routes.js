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
  /* req.body should look like this...
    {
      activity_name: "Watch a movie",
      categoryIds: [1, 2, 3, 4]
    }
  */
    try {
        const indoorData = Indoor.create({
            indoor: req.body.indoor       
        })
        if (req.body.categoryIds) {
            const categoryIdArr = req.body.categoryIds.map((category_id) => {
              return {
                indoor_id: indoor.id,
                category_id,
              };
            });
            return Category.bulkCreate(categoryIdArr);
          }
          res.status(200).json(indoorData);

    } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;