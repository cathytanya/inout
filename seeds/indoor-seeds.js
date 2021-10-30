const { Indoor } = require('../models')

const indoorData = [
    {
        // category_id: 4,
        category_id: 4,
        category_images: "/images/netflix.jpg",
        activity_name: 'Video Games'
    },
    {
        // category_id: 2,
        category_id: 2,
        category_images: "/images/meditation.jpg",
        activity_name: 'Yoga'
    },
    {
        // category_id: 3,
        category_id: 3,
        category_images: "/images/cook.jpg",
        activity_name: 'Receipt'
    },
    {
        // category_id: 1,
        category_id: 1,
        category_images: "/images/paint.jpg",
        activity_name: 'Paint By Number'
    },
    {
        // category_id: 4,
        category_id: 4,
        category_images: "/images/netflix.jpg",
        activity_name: 'Watch Movies'
    },
    {
        // category_id: 2,
        category_id: 2,
        category_images: "/images/meditation.jpg",
        activity_name: 'Spa Day'
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.exports = seedIndoor;