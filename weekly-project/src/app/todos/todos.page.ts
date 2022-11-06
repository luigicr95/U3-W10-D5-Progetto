import { Component, OnInit } from '@angular/core';
import { Todos } from '../classes/todos';
import { TodosService } from '../services/todos.service';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todoArray?: Todos[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todoArray = this.todosService.todoList;
  }

  checkTask(item: Todos) {
    this.todosService.completeTask(item);
  }
}
