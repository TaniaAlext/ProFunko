import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funkutalles',
  templateUrl: './funkutalles.component.html',
  styleUrls: ['./funkutalles.component.css']
})
export class FunkutallesComponent {
  numCart: number = 0;

  constructor(private cartService: CartService,private http: HttpClient,private authService: AuthService) {}

  ngOnInit(): void {
    
    this.cartService.cartItems$.subscribe(items => {
      this.numCart = items.length;
    });
  }
  logout(): void {
    this.authService.logout();
  }
}
