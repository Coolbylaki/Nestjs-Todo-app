import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Get()
  getTodos() {
    return [];
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return createTodoDto;
  }
}
