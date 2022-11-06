import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/classes/todos';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTask() {
    let addedTask: Todos = new Todos(this.title);
    this.todosService.addTodo(addedTask);
    this.title = '';
    console.log(addedTask);
  }
}
