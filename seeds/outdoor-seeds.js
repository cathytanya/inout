const { Outdoor } = require('../models')
// const { Outdoor } = require('../public/images/')
const outdoorData = [
    {
        category_id: 2,
        activity_name: 'Hiking',
        image: "/public/images/health.jpg",
    },
    {
        category_id: 2,
        activity_name: 'Running',
        image: "/public/images/health.jpg",
    },
    {
        category_id: 1,
        activity_name: 'Museum trip',
        image: "/public/images/art.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Meal at a restaurant',
        image: "/public/images/food.jpg",
    },
    {
        category_id: 3,
        activity_name: 'Wine Tasting',
        image: "/public/images/food.jpg",
    },
    {
        category_id: 4,
        activity_name: 'Concert',
        image: "/public/images/health.jpg",
    }
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.exports = seedOutdoor;