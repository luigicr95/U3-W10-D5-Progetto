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
  newTask: Todos = new Todos();

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTask() {
    this.todosService.addTodo(this.newTask);
    this.newTask = new Todos();
    this.newTask.id = this.todosService.todoList.length;
    this.newTask.completed = false;
    console.log(this.newTask);
  }
}
