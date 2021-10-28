// linking these file to the following
const seedCategory = require('./category-seeds');
const seedComment = require('./comment-seeds');
const seedIndoor =  require('./indoor-seeds');
const seedOutdoor = require('./outdoor-seeds');
const seedUser = require('./user-seeds');

// dependency
const sequalize = require('../config/connection');

const seedAll = async () => {
    await sequalize.sync({force: true});
    consol.log('\---------DATABASE---------');
    await seedUser();
    consol.log('\---------USER SEEDS---------');
    await seedCategory();
    consol.log('\---------CATEGORY SEEDS---------');

    await seedIndoor();
    consol.log('\---------INDOOR SEEDS---------');

    await seedOutdoor();
    consol.log('\---------OUTDOOR SEEDS---------');

    await seedComment();
    consol.log('\---------COMMENT SEEDS---------');

    process.exit(0);
}

seedAll();