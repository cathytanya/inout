const { Indoor } = require('../models')

const indoorData = [
    {
        category_id: 4,
        activity_name: 'Video Games',
        image: "/images/netflix.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Yoga',
        image: "/images/meditation.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Receipt',
        image: "/images/cook.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Paint By Number',
        image: "/images/paint.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Watch Movies',
        image: "/images/netflix.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Spa Day',
        image: "/images/meditation.jpg",
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.exports = seedIndoor;