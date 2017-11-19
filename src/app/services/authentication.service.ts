import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const APP_SERVER = "http://127.0.0.1:5000/";

@Injectable()
export class AuthenticationService {
    public jwtHelper
    constructor(private http: Http) {
        this.jwtHelper = new JwtHelper();
     }

    public login(username: string, password: string): Observable<any> {
        const options: RequestOptions = new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        const path = `${APP_SERVER}auth`;
        return this.http.post(path, JSON.stringify({ 'username': username, 'password': password }), options)
            .map((response: Response) => response.json())
            .catch((error: Error) => Observable.throw(error || 'Server error'));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}