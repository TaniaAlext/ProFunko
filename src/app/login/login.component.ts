import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) { }
  
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.redirect) {
          this.router.navigate([response.redirect]);
        } else {
          alert(response.message);
        }
      },
      error => {
        console.error('Error:', error);
        alert('Error en el servidor');
      }
    );
   
  } 
  navigateToRegister() {
    this.router.navigate(['registro']);
}}
