// the required dependencies for the file
const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js')

class Category extends Model {}
Category.init({
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
        //   category_id varchar(30) not null
        category_name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

module.exports = Category