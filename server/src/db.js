// const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path= require('path');
// require('dotenv').config();
// const {DB_USER, DB_PASSWORD,DB_NAME, DB_HOST, DB_PORT, DB_DEPLOY} = process.env;
//   const sequelize = new Sequelize(
//     `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//  {
//    logging: false,   // set to console.log to see the raw SL queries
//      native: false, // lets Sequelize know e can use pg-native for  30%more speed
//  }
// );




require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_DEPLOY,
} = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  host: `${DB_HOST}`,
  dialect: 'postgres',
  logging: false
});



module.exports =  sequelize ;
