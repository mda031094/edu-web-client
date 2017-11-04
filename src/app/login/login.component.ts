import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    styleUrls: ["login.component.css"],
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public loading: boolean = false;
    public error: string = "";

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    public ngOnInit() {
        this.authenticationService.logout();
    }

    public login() {
        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .subscribe((result) => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}