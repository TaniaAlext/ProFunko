import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any = [];
  userForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      Nombre: [''],
      email: [''],
      password: ['']
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

  
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  createUsers(): void {
    this.userService.createUsers(this.users).subscribe(() => {
      this.loadUsers();
    });
  }

  getUsers() {
    // Aquí puedes implementar la lógica para obtener usuarios si es necesario
  }
}