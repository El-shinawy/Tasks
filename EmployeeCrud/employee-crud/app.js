const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost:27017/UserDB');


app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.static('public'));


const employeeRoutes = require('./routes/employeeRoutes');
app.use('/', employeeRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
