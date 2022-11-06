import { Injectable } from '@angular/core';
import { Todos } from '../classes/todos';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: Todos[] = [];
  completedTodo: Todos[] = [];

  constructor() {}

  addTodo(newTask: Todos) {
    this.todoList.push(newTask);
    console.log(newTask);
  }

  completeTask(completeTask: Todos) {
    completeTask.check = completeTask.check === 'check' ? '' : 'check';
    this.completedTodo.push(completeTask);
    completeTask.completed = true;
    console.log(completeTask);
  }
}
