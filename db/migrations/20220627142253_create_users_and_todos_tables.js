/**
 * Migration that creates a 'users' table and 'todos' table in database.
 * 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    }).createTable('todos', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.boolean('completed').notNullable().defaultTo(false);;
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.integer('user_id').references('id').inTable('users');
    });
};

/**
 * Migration that destroys the 'todos' table and 'users' table from database.
 * 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('todos').dropTable('users');
};