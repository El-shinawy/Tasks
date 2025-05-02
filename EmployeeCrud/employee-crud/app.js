const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost:27017/UserDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));


const employeeRoutes = require('./routes/employeeRoutes');
app.use('/', employeeRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
