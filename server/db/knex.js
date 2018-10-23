const environment =process.env.NODE_ENV || 'development';
console.log(environment)
const config = require('../knexfile')[environment];

//connects to database
module.exports = require('knex')(config);