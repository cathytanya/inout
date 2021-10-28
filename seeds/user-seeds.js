const { User } = require('../model/User')

const userData = [
    {
        username:'clintEast',
        pass_word:'cowboy7',
        email:'loneranger@yahoo.ca'
        
    },
    {
        username:'willSmith',
        pass_word:'freshprince',
        email:'freshprince@gmail.com'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.export = seedUser;