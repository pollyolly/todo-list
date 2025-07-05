import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import '@angular/compiler';

//Bootsrap (initialize or start)
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

//Bootsrap (initialize or start)
//Use here the app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
