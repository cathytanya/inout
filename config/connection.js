const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
=======

const sequelize = new Sequelize(
   //process.env.DB_SHAM,
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASSWORD,


  {
     host: 'localhost',
     dialect: 'mysql',
     port: 3306,
  }
);

module.exports = sequelize;

>>>>>>> 8db097857b5ed4cb45de01802441a979143f073d
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
      // process.env.DB_SHAM,
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}


module.exports = sequelize;