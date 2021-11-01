const { User } = require('../models')

const userData = [
    {
        username:'clintEast',
        email:'loneranger@yahoo.ca',
        password:'cowboy7'
    },
    {
        username:'willSmith',
        email:'freshprince@gmail.com',
        password:'freshprince'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;