

const Todo = require('./mongo');

const api = {
	getItems : (req,res) => {
		Todo.find({})
			.exec( (err,docs) => {
				if(err) return res.status(500).json(err);
				res.status(200).json(docs)
			})
	},

	deleteItem : (req,res) => {
		const id = req.params.id;
		Todo.findByIdAndRemove(id)
			.exec((err,doc) => {
				if(err) return res.status(500).json(err);
				console.log("Deleted doc = ", doc)
				res.status(200).json(doc)
			})
	},

	addItem : (req,res) =>{
		let todo = new Todo({title : req.body.title.trim()});
		todo.save( (err,doc) => {
			if(err) return res.status(500).json(err);
			res.status(200).json(doc)
		})
	}
}

module.exports = {
	api
}
