import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthResponse } from '../models/authresponse';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formError: string = '';

  credentials = {
    name: '',
    email: '',
    password: ''
  };
  authResponse: AuthResponse | null = null;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
      this.router.navigateByUrl('/login'); // Return to login page
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let Newuser : User= {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;
    
    this.authenticationService.login(Newuser).then(() => this.router.navigateByUrl('#'))
    .catch((message: string) => this.formError = message)
  }

  private saveToken(token: string): void {
    localStorage.setItem('travlr-token', token);
  }
}

