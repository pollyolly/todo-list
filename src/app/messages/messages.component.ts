import { Component } from '@angular/core';
import { MessageService } from "../message.service"

// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  // standalone: true, //Meaning Component do not need app.module.ts to include dependencies
  //                   //Dependencies are import inside the component like CommonModule
  // imports: [
  //   CommonModule //Import dependencies inside Component
  // ]
})

export class MessagesComponent {
  constructor(public messageService: MessageService) {}

}
