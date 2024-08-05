import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registerForm: FormGroup;
  message: string ='';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator
      ]]
    });
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNoConsecutiveNumbers = !/(\d)\1/.test(value);
    const hasNoConsecutiveLetters = !/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(value);

    const valid = hasUpperCase && hasLowerCase && hasSpecialCharacter && hasNoConsecutiveNumbers && hasNoConsecutiveLetters;
    return valid ? null : { passwordInvalid: true };
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/register', this.registerForm.value)
        .subscribe(
          response => {
            this.message = 'User registered successfully';
            this.router.navigate(['login']);
          },
          error => {
            this.message = 'Registration failed';
          }
        );
    }
  }
  navigateToLogin() {
    this.router.navigate(['login']);
  }
}

