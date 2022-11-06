import { Component, OnInit } from '@angular/core';
import { Todos } from '../classes/todos';
import { TodosService } from '../services/todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  completedArray?: Todos[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.completedArray = this.todosService.completedTodo;
  }
}
