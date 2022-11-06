import { Todo } from '../interfaces/todo';

export class Todos implements Todo {
  id?: number;
  title?: string;
  completed?: boolean;
  check?: string;
  constructor(title: string) {
    this.title = title;
    this.completed = false;
    this.check = '';
  }
}
