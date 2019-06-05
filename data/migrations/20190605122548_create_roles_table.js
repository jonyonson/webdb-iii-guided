// new changes to the database schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {
    // pk called id, integer, autoincrement
    tbl.increments();

    // varchar called name, 128 chars, unique, not null
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  });
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};

// npx knex migrate:make create_roles_table
// npx knex migrate:latest to run the migrations
// npx knex migrate:rollback to undo the migrations
