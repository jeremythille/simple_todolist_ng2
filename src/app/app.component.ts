import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTodo() {
    if(!this.newTodo.title.trim().length) return;
    console.log("adding ", this.newTodo)
    this.todoService.addTodo(this.newTodo);
    this.newTodo.title = "";
  }
}
