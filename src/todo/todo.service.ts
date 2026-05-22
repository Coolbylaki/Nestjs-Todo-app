import { Injectable } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  getAll() {
    return this.todos;
  }

  createTodo(title: string, completed: boolean): Todo {
    const id = Date.now();

    const todo = {
      id: id,
      title,
      completed,
    };

    this.todos.push(todo);

    return todo;
  }
}
