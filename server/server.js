const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
// const {User} = require('./models/user');

const app = express();

// middleware(inside the "app.use") that converts json into the object and attaches it to the request body
// this and all other middlewares should be functions so this one returns a function also
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then(
            doc => res.send(doc),
            (e) => res.status(400).send(e)
        );
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});