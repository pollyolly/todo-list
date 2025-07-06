import { Component, OnInit } from '@angular/core';

import Todo from "../todo.type"
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  todos: Todo[] = []

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos.slice(0, 5))
  }

}
