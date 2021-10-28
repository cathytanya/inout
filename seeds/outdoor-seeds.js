const { Outdoor } = require('../model/Outdoor')

const outdoorData = [
    {
        activity_name: 'Hiking'
    },
    {
        activity_name: 'Running'
    },
    {
        activity_name: 'Shopping'
    },
    {
        activity_name: 'Resteraunts'
    },
    {
        activity_name: 'Wine Tasting'
    },
    {
        activity_name: 'Spa Day'
    }
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.export = seedOutdoor;