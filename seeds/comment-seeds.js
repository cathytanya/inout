const { Comment } = require('../models')

const commentData = [
    {
        // user_id: 1,
        comment: 'great thing to go'
    },
    {
        // user_id: 2,
        comment: 'I miss being inside'
    },
    {
        // user_id: 3,
        comment: 'I miss outside'
    },
    {
        // user_id: 4,
        comment: 'Where is my blanket'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);
console.log(commentData);
module.exports = seedComment;