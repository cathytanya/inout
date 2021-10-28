const { Indoor } = require('../model/Indoor')

const indoorData = [
    {
        activity_name: 'Video Games'
    },
    {
        activity_name: 'Yoga'
    },
    {
        activity_name: 'Receipt'
    },
    {
        activity_name: 'Paint By Number'
    },
    {
        activity_name: 'Watch Movies'
    },
    {
        activity_name: 'Spa Day'
    }
]

const seedIndoor = () => Indoor.bulkCreate(indoorData);
module.export = seedIndoor;