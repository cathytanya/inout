const { Outdoor } = require('../models')

const outdoorData = [
    {
        // category_id: 1,
        activity_name: 'Hiking'
    },
    {
        // category_id: 2,
        activity_name: 'Running'
    },
    {
        // category_id: 3,
        activity_name: 'Shopping'
    },
    {
        // category_id: 4,
        activity_name: 'Resteraunts'
    },
    {
        // category_id: 5,
        activity_name: 'Wine Tasting'
    },
    {
        // category_id: 6,
        activity_name: 'Spa Day'
    }
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.exports = seedOutdoor;