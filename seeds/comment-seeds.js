const { Comment } = require('../model/Comment')

const commentData = [
    {
        comment: 'great thing to go'
    },
    {
        comment: 'I miss being inside'
    },
    {
        comment: 'I miss outside'
    },
    {
        comment: 'Where is my blanket'
    }
]

const seedComment = () => Comment.bulkCreate(commentData);
module.export = seedComment;