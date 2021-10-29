const { Indoor } = require('../models')

const indoorData = [
    {
        // category_id: 1,
        activity_name: 'Video Games',
    },
    {
        // category_id: 2,
        activity_name: 'Yoga'
    },
    {
        // category_id: 3,
        activity_name: 'Receipt'
    },
    {
        // category_id: 4,
        activity_name: 'Paint By Number'
    },
    {
        // category_id: 5,
        activity_name: 'Watch Movies'
    },
    {
        // category_id: 6,
        activity_name: 'Spa Day'
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.exports = seedIndoor;