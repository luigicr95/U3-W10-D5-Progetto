import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: Todo[] = [];
  completedTodo: Todo[] = [];

  constructor() {}
}
