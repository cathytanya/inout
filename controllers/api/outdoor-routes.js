const router = require('express').Router();
const { Outdoor, Category } = require('../../models');

// Get all outdoor activities
router.get('/', async (req, res) => {
    try {
        const outdoorData = await Outdoor.findAll({
            include: [{ model: Category }],
        });
        res.status(200).json(outdoorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get outdoor activity by ID
router.get('/:id', async (req, res) => {
    try {
        const outdoorData = await Outdoor.findOne({
            where: { id: req.params.id },
            include: [Category],
        });
        res.status(200).json(outdoorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new outdoor activity
router.post('/', async (req, res) => {
    try {
        const outdoorData = await Outdoor.create({
            activity_name: req.body.activity_name,
            category_id: req.body.category_id,
            image: req.body.image
        });
        res.status(200).json(outdoorData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update outdoor activity by ID
router.put('/:id', async (req, res) => {
    try {
      const outdoorData = await Outdoor.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!outdoorData[0]) {
        res.status(404).json({ message: 'No outdoor activity with this ID' });
      }
      res.status(200).json(outdoorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Delete outdoor activity by ID
router.delete('/:id', async (req, res) => {
    const outdoorData = await Outdoor.destroy({
        where: {
            id: req.params.id,
        },
    });
    return res.json(outdoorData);
});


module.exports = router;