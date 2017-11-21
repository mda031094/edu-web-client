import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router) { }

    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    public confirmPassword: string;

    public signUp(): void {
        this.router.navigate(['main']);
    }
}
