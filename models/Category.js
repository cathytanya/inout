// the required dependencies for the file
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Category extends Model {}
Category.init(
    {
        // the column ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        //   category_id varchar(30) not null
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category