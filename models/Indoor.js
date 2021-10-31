// the required dependencies for the file
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Indoor extends Model {}
Indoor.init(
    {
        // the column ID
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // activity_in_Name varchar(30) not null,
        activity_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // category_in_id int not null,
        // foreign key (category_in_id) references category(id)
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        // image: {
        //     type: DataTypes.BLOB
        // }
        category_images:{
            type: DataTypes.IMAGE
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'indoor'
    }
);

module.exports = Indoor
