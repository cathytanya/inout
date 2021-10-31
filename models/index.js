const Comment = require('./Comment');
const Category = require('./Category');
const Indoor = require('./Indoor');
const Outdoor = require('./Outdoor');
const User = require('./User');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Indoor, {
    foreignKey: 'category_id',
});

Category.hasMany(Outdoor, {
    foreignKey: 'category_id',
});

// foreign key (category_id) references category(id)
Indoor.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

// foreign key (category_out_id) references category(id)
Outdoor.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Comment,
    Category,
    Indoor,
    Outdoor,
    User
};

