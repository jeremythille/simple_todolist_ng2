import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Todo } from './todo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  public todos: Todo[] = [];

  constructor(private http: Http) {
  }

  addTodo(todo: Todo) {
      return this.http
        .post("/add", todo)
        .toPromise()
        .then( res => {
          let added = res.json();
          this.todos.push(added);
        })
        .catch( err => console.log(err));
  }

  deleteById(_id: string) {
      return this.http
        .delete("/todos/" + _id)
        .toPromise()
        .then( res => this.todos = this.todos.filter(todo => todo._id !== _id))
        .catch((err) => console.log(err));
  }

  getAllTodos() {
    return this.http
			.get("/todos")
			.toPromise()
      .then( res => this.todos = res.json())
			.catch( err => console.log(err));
  }
}