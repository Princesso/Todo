//todo table will have
// title -Text
// priority -integer eg 1,2,3..etc 
// description -Text
// date-datetime
// done-boolean 

exports.up = function(knex, Promise) {
  return knex.schema.createTable('todotable', (table)=>{
    table.increments();
    table.text('title').notNullable();
    table.integer('priority').notNullable();
    table.text('description');
    table.boolean('done').defaultTo(false).notNullable();
    table.datetime('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todotable')
};
