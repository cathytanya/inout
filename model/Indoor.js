// the required dependencies for the file
const {Model,DataTypes} = require('sequelize')
const sequelize = require('..//config/connection')

class Indoor extends Model {}
Indoor.init({
        // the column ID
        id: {
            // Integer
            type: DataTypes.INTEGER,
            // Doesn't allow null values
            allowNull: false,
            // Set as primary key
            primaryKey: true,
            // Uses auto increment
            initialAutoIncrement: true
          },
        // category_in_id int not null,
        // foreign key (category_in_id) references category(id)
        category_in_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'category',
                key:'id'
            }
        },
        // activity_in_Name varchar(30) not null,
        activity_in_Name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

module.exports = Indoor
