// the required dependencies for the file
const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model {}
User.init({
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
        //   username varchar(30) not null,
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        // email varchar(30) not null
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        // pass_word varchar(30) not null
        pass_word:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false
    });

module.exports = User