import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  newTask?: Todo;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void { }
  
  addTask() {
    this.todosService.addTodo()
  }
}
