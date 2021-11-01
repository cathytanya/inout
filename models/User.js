// the required dependencies for the file
const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection')

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //   username varchar(30) not null,
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // email varchar(30) not null
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // password varchar(30) not null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        console.log('hi')
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log(newUserData)
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User
