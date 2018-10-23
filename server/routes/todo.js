var express = require('express');
var router = express.Router();

//import database connection
const knex=require('../db/knex');

/* GET todo page.  this page will show all routes with /todo/* */
router.get('/', function(req, res, next) {
   knex('todotable')
  .select()
      .then(todos =>{
        res.render('all', {todos: todos});
       })
  
});


module.exports = router;
