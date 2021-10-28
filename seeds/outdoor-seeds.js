const { Outdoor } = require('../model/Outdoor')

const outdoorData = [
    {
        activity_Name: 'Hiking'
    },
    {
        activity_Name: 'Running'
    },
    {
        activity_Name: 'Shopping'
    },
    {
        activity_Name: 'Resteraunts'
    },
    {
        activity_Name: 'Wine Tasting'
    },
    {
        activity_Name: 'Spa Day'
    }
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);
module.export = seedOutdoor;