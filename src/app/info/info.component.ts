import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Todo from "../todo.type"
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-info',
  // standalone: true,
  // imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private route:ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ){}
  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo)
  }
  goBack(): void {
    this.location.back();
  }
}
