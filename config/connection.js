const Sequelize = require('sequelize')
let sequelize = new Sequelize("inout_db","root","Wildcats22",{
    host:"localhost",
    dialect: "mysql",
    PORT:3306
})
module.exports = sequelize

