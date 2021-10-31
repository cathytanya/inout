const { Indoor } = require('../models')

const indoorData = [
    {
        category_id: 4,
        activity_name: 'Video Games',
        image: "/public/images/netflix.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Yoga',
        image: "/public/images/meditation.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Receipt',
        image: "/public/images/cook.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Paint By Number',
        image: "/public/images/paint.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Watch Movies',
        image: "/public/images/netflix.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Spa Day',
        image: "/public/images/meditation.jpg",
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.exports = seedIndoor;