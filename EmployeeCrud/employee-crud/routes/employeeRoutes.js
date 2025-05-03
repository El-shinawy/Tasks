const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  const employees = await Employee.find({});
  res.render('index', { employees });
});

router.get('/new', (req, res) => {
  res.render('form', { employee: {}, action: '/new', method: 'POST' });
});

router.post('/new', async (req, res) => {
  const { name, address, salary, gender } = req.body;
  await Employee.create({ name, address, salary, gender });
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render('form', { employee, action: `/edit/${employee._id}?_method=PUT`, method: 'POST' });
});

router.put('/edit/:id', async (req, res) => {
  const { name, address, salary, gender } = req.body;
  await Employee.findByIdAndUpdate(req.params.id, { name, address, salary, gender });
  res.redirect('/');
});

router.delete('/delete/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
