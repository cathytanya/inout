const { Indoor } = require('../model/Indoor')

const indoorData = [
    {
        activity_Name: 'Video Games'
    },
    {
        activity_Name: 'Yoga'
    },
    {
        activity_Name: 'Receipt'
    },
    {
        activity_Name: 'Paint By Number'
    },
    {
        activity_Name: 'Watch Movies'
    },
    {
        activity_Name: 'Spa Day'
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.export = seedIndoor;