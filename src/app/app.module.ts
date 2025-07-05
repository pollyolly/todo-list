import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagesComponent } from "./messages/messages.component"
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    //...your components, directives, pipes
    AppComponent,        //We cannot add {standalone: true } Components here
    MessagesComponent,
    DashboardComponent,
    InfoComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    //...other imported modules
  ],
  exports:[
    // Components, directives, pipes exported for use in other modules
  ],
  providers:[
    //services
  ],
  bootstrap:[AppComponent] //bootstrap (initialize or starting) Component
})
export class AppModule { }
