/**
 * Inserts dummy users in the 'users' table.
 * 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries from 'users' table.
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Dhrumil Shah', email: 'dhrumil@example.com' },
    { id: 2, name: 'Samiksha Salgaonkar', email: 'samiksha@example.com' },
    { id: 3, name: 'Kartik Patel', email: 'kartik@gmail.com' }
  ]);
};
