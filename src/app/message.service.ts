import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //Way to include service application wide
})
export class MessageService {

  messages: string[] = []

  add(message: string){
    this.messages.push(message)
  }
  clear(){
    this.messages = []
  }
}
