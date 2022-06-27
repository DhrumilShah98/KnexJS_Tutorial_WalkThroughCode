import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();

const port = process.env.SERVER_PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/todos', todoRoutes);

app.listen(port, function () {
    console.log(`Server listening on port: ${port}`);
});