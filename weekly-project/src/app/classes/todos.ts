import { Todo } from '../interfaces/todo';

export class Todos implements Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}
