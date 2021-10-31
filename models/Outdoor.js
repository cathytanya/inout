// the required dependencies for the file
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Outdoor extends Model {}
Outdoor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // activity_out_Name varchar(30) not null,
        activity_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // category_out_id int not null,
        // foreign key (category_out_id) references category(id)
        category_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            },
        },
        // image: {
        //     type: DataTypes.BLOB
        // }
        category_images:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'outdoor'
    }
);

module.exports = Outdoor