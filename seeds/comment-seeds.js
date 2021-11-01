const { Comment } = require('../models')

const commentData = [
    {
        user_id: 1,
        comment: 'great thing to go'
    },
    {
        user_id: 2,
        comment: 'I miss being inside'
    },
    {

        user_id: 1,
        comment: 'I miss outside'
    },
    {
        user_id: 2,
        comment: 'Where is my blanket'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;