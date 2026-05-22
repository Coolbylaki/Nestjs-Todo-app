import { Injectable } from '@nestjs/common';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  todos: Todo[] = [];
}
