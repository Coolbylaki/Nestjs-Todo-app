import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getAll();
  }

  @Get('/:id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getOne(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(
      createTodoDto.title,
      createTodoDto.completed,
    );
  }

  @Patch('/:id')
  UpdateTodoDto(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(
      id,
      updateTodoDto.title,
      updateTodoDto.completed,
    );
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
