import { Component, OnInit } from '@angular/core';
import Todo from "../todo.type"
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  // standalone: true,
  // imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getTodos();
  }
  
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
  
}
