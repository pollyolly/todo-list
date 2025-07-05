import { Component } from '@angular/core';
// import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // standalone: true, //If true Component do not need app.module.ts to include dependencies
  //                   //Dependencies are import inside the component like CommonModule
                       //We cannot import this to app.module.ts
  // imports:[MessagesComponent],
})
export class AppComponent {
  title = 'Todo List';
}
