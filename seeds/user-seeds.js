const { User } = require('../model/User')

const userData = [
    {
        username:'clintEast',
        password:'cowboy7',
        email:'loneranger@yahoo.ca'
        
    },
    {
        username:'willSmith',
        password:'freshprince',
        email:'freshprince@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.export = seedUser;