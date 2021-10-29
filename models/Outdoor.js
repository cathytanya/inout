// the required dependencies for the file
const { Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Outdoor extends Model {}
Outdoor.init({
        // the column ID
        id: {
            // Integer
            type: DataTypes.INTEGER,
            // Doesn't allow null values
            allowNull: false,
            // Set as primary key
            primaryKey: true,
            // Uses auto increment
            autoIncrement: true
          },
        // category_out_id int not null,
        // foreign key (category_out_id) references category(id)
        category_id:{
            type: DataTypes.INTEGER,
            // allowNull: false,
            references:{
                model:'category',
                key:'id'
            }
        },
        // activity_out_Name varchar(30) not null,
        activity_name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'outdoor'
    });
module.exports = Outdoor