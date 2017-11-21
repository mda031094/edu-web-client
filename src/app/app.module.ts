import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';
import { MainModule } from "./main/main.module";
import { AuthenticationService } from './services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    LoginModule,
    MainModule,
    HttpModule,
  ],
  providers: [
    AuthenticationService,
    provideAuth({
      headerPrefix: 'JWT'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
