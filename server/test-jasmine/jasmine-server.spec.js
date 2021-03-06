const api = require("../modules/api").api;

let todo = {
	"created": new Date(),
	"id": 0,
	"title": "Mocked title"
}

let docToTest = null;

describe("Add", () => {
	/*
	addItem : (req,res) =>{
		const todo = { id : ++lastId, title : req.body.title.trim()};
		todos.push(todo);
		res.send(todo);
	}*/

	beforeEach( done => {
		let req = { body: { title: todo.title } };

		let res = {
			send : (docReturned) => {
				docToTest = docReturned;
				done();
			}
		}
		api.addItem(req, res);
	});

	it('should save a new todo', () => {
		expect(docToTest.title).toEqual(todo.title);
	});
})