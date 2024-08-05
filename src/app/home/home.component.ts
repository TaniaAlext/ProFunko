import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  numCart: number = 0;
  currentUser: string | null = null;

  constructor(private authService: AuthService) { }
  getUser(): any {
    return this.user; // Devuelve el usuario almacenado
  }
  logout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
