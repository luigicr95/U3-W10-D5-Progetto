import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}
}
