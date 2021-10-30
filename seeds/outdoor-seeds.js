// const { Outdoor } = require('../models')
const { Outdoor } = require('../public/category_images/outdoor/')
const outdoorData = [
    {
        // category_id: 1,
        category_id: 2,
        category_images: "/images/health.jpg",
        activity_name: 'Hiking'
    },
    {
        // category_id: 2,
        category_id: 2,
        category_images: "/images/health.jpg",
        activity_name: 'Running'
    },
    {
        // category_id: 3,
        category_id: 1,
        category_images: "/images/art.jpg",
        activity_name: 'Museum'
    },
    {
        // category_id: 4,
        category_id: 3,
        category_images: "/images/food.jpg",
        activity_name: 'Resteraunts'
    },
    {
        // category_id: 5,
        category_id: 2,
        category_images: "/images/food.jpg",
        activity_name: 'Wine Tasting'
    },
    {
        // category_id: 6,
        category_id: 3,
        category_images: "/public/category_images/outdoor/health.jpg",
        activity_name: 'Concert'
    }
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.exports = seedOutdoor;