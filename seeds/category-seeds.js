const { Category } = require('../models/')

const categoryData = [
    {
        category_name: 'Art'
    },
    {
        category_name: 'Health/Wellness'
    },
    {
        category_name: 'Food'
    },
    {
        category_name: 'Entertainment'
    }
]

const seedCategory = () => Category.bulkCreate(categoryData);
module.exports = seedCategory;