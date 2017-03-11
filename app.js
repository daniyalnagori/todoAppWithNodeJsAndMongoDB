var express = require('express');

var todoController = require('./controllers/todoController');
var app = express();
var mongoose = require('mongoose');

//connect to the database
mongoose.connect("mongodb://test:test@ds127730.mlab.com:27730/todo")

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));


//fire controllers
todoController(app);

//listen to port
app.listen(process.env.PORT || 2000);
console.log('now server is running...');