const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Mohamed', address: 'Cairo', salary: 5000, gender: 'male' },
  { id: 2, name: 'Sohaila', address: 'Maadi', salary: 6000, gender: 'female' }
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = users.find(emp => emp.id === id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});


app.post('/users', (req, res) => {
  const newEmployee = req.body;
  users.push(newEmployee);
  res.status(201).json(newEmployee);
});


app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(emp => emp.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});


app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(emp => emp.id === id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
