const Comment = require('./Comment');
const Category = require('./Category');
const Indoor = require('./Indoor');
const Outdoor = require('./Outdoor');
const User = require('./User');

Comment.belongsTo(User,{
    foreignKey:'user_id'
});
// foreign key (category_id) references category(id)
Indoor.belongsTo(Category,{
    foreignKey:'category_id'
})
// foreign key (category_out_id) references category(id)
Outdoor.belongsTo(Category,{
    foreignKey:'category_id'
})

module.exports={
    Comment,
    Category,
    Indoor,
    Outdoor,
    User
}

