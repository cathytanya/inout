const { Category } = require('../model/Category')

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

const seedCategory = () => Outdoor.bulkCreate(categoryData);
module.export = seedCategory;