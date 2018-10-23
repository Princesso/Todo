var express = require('express');
var router = express.Router();
const Joi = require('joi');

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

router.get('/new', function(req, res) {
  //create file named new to be rendered
       res.render('new');
});

const schema=Joi.object().keys({
  title: Joi.string().min(5).max(20).required(),
  description: Joi.string().required(),
  priority: Joi.required(),
})

router.post('/new', (req, res)=> {
  //create file named new to be rendered
  Joi.validate(req.body, schema)
       res.render('new');
});


module.exports = router;
