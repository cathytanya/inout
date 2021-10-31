// the required dependencies for the file
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}
Comment.init(
    {
        // the column ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        //   user_id int not null,
        // foreign key (user_id) references user_(id)
        user_id:{
            type: DataTypes.INTEGER,
            // allowNull: false,
            references:{
                model:'user',
                key:'id'
            }
        },
        // comment varchar(30),
        comment:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'    
    }
);

module.exports = Comment
