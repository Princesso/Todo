//Seeds would contain sample data
// title -Text
// priority -integer eg 1,2,3..etc 
// description -Text
// date-datetime
// done-boolean 
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todotable').del()
    .then(function () {
      // Inserts seed entries
     const todoitems =[
       {title: 'eat food', priority:1,date:new Date()},
       {title: 'Wash my clothes', priority:7,date:new Date()},
       {title: 'play a game', priority:3,date:new Date()},
       {title: 'dance class', priority:5,date:new Date()},
      ];
      return knex('todotable').insert(todoitems);
    });
};
