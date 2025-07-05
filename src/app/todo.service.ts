import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import  Todo  from "./todo.type"
import { Todos } from "./mock-todos"
import { MessageService } from "./message.service"

@Injectable({
  providedIn: 'root' //Way to include service application wide
})
export class TodoService {
  
  constructor(private messageService: MessageService){}

  getTodos(): Observable<Todo[]> {
    const todos = of(Todos);
    this.messageService.add('Todos Service: fetched todo list');
    return todos;
  }
  getTodo(id: number): Observable<Todo> {

    const todo = Todos.find(todo => todo.id === id)!; //We added ! to assure typescript its not undefined and nullable
    this.messageService.add('Todos Service: fetched todo id: '+id);
    return of(todo); //Error: When Typescript detect a undefined and nullable
                     //We use Observable.of(todo) instead of a http request like this.http.get(todo)
  }
}
