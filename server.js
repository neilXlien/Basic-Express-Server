const express = require('express');

// init express
const app = express();

const PORT = 5000;

app.get('/api/1/todos', (req, res) => {
  res.status(200).json({ success: true, message: 'List of all Todos' });
});

app.get('/api/1/todos/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Show Todo ${req.params.id}` });
});

app.post('/api/1/todos/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Create new Todo ${req.params.id}` });
});

app.put('/api/1/todos/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Update Todo ${req.params.id}` });
});

app.delete('/api/1/todos/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Delete Todo ${req.params.id}` });
});


app.listen(
  PORT, console.log(`Server running on Port: ${PORT}`)
);

