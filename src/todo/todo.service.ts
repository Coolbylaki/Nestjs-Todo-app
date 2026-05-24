import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

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

  updateTodo(id: string, title?: string, completed?: boolean): Todo {
    const todo = this.todos.find((todo) => todo.id === parseInt(id));

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    if (title !== undefined) {
      todo.title = title;
    }

    if (completed !== undefined) {
      todo.completed = completed;
    }

    return todo;
  }

  deleteTodo(id: string) {
    const ID = parseInt(id);

    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === ID) {
        const foundTodo = this.todos[i];

        this.todos.splice(i, 1);

        return foundTodo;
      }
    }

    throw new NotFoundException('Todo not found');
  }
}
