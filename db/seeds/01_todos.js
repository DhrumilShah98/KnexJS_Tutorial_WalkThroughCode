/**
 * Inserts dummy todos in the 'todos' table.
 * 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries from 'todos' table.
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, title: 'Go to Gym', user_id: 1 },
    { id: 2, title: 'Learn Knex', user_id: 1 },
    { id: 3, title: 'Make Lunch', user_id: 2 },
    { id: 4, title: 'Make Dinner', user_id: 2 },
    { id: 5, title: 'Complete Assignment', user_id: 3 },
    { id: 6, title: 'Complete Quiz', user_id: 3 }
  ]);
};
