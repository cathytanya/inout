// linking these file to the following
const seedCategory = require('./category-seeds');
const seedComment = require('./comment-seeds');
const seedIndoor =  require('./indoor-seeds');
const seedOutdoor = require('./outdoor-seeds');
const seedUser = require('./user-seeds');

// dependency
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\---------DATABASE---------');

    await seedUser();
    console.log('\---------USER SEEDS---------');
    
    await seedCategory();
    console.log('\---------CATEGORY SEEDS---------');

    await seedIndoor();
    console.log('\---------INDOOR SEEDS---------');

    await seedOutdoor();
    console.log('\---------OUTDOOR SEEDS---------');

    await seedComment();
    console.log('\---------COMMENT SEEDS---------');

    process.exit(0);
}

seedAll();