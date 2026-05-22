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

  getOne(id: string) {
    const ID = parseInt(id);

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === ID) {
        return this.todos[i];
      }
    }
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
