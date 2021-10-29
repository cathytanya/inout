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
            autoIncrement: true
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
        // password varchar(30) not null
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          }},
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User