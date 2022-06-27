import express from 'express';
import knex from '../db/knex.js';
const router = express.Router();

// Route to get all todos.
router.get('/', async function (req, res) {
    const todos = await knex.select().from('todos');
    res.send(todos);
});

// Route to get a specific todo.
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const todo = await knex.select().from('todos').where('id', id);
    res.send(todo[0]);
});

// Route to post a todo.
router.post('/', async function (req, res) {
    const { title, user_id } = req.body;
    const newTodo = { title, user_id };
    const todoId = await knex('todos').insert(newTodo);
    const todo = await knex.select().from('todos').where('id', todoId[0]);
    res.send(todo[0]);
});

// Route to update a todo.
router.put('/:id', async function (req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updateTodo = { title, completed };
    await knex('todos').where('id', id).update(updateTodo);
    const todo = await knex.select().from('todos').where('id', id);
    res.send(todo[0]);
});

// Route to delete a todo.
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    const todo = await knex.select().from('todos').where('id', id);
    await knex('todos').delete().where('id', id);
    res.send(todo[0]);
});

// Route to get all todos for a specific user.
router.get('/todos-of-user/:user_id', async function (req, res) {
    const { user_id } = req.params;
    const todosOfUser = await knex.select().from('todos').innerJoin('users', 'todos.user_id', 'users.id').where('todos.user_id', user_id);
    res.send(todosOfUser);
});

export default router;