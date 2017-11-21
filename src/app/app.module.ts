import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';
import { MainModule } from "./main/main.module";
import { AuthenticationService } from './services';
import { SignUpModule } from './sign-up/sign-up.module';

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
    SignUpModule,
  ],
  providers: [
    AuthHttp,
     {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http, RequestOptions]
     },
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
       return new AuthHttp(new AuthConfig({
          headerName: 'Authorization',
          headerPrefix: 'JWT',
          tokenName: 'token',
          globalHeaders: [{'Content-Type': 'application/json'}],
      }), http, options);
    }


