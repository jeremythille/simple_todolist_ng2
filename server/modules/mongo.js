const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  	title:{
		type : String,
		default : "Mon titre"
},
  	created: {
   		 type: Date,
    		"default": Date.now
  	}
});

const Todo = mongoose.model('todo', todoSchema);

mongoose.connect('mongodb://localhost/todolist', function(err) {
  if (err) {return console.error("Error connecting to MongoDB!");}
});

module.exports = Todo;