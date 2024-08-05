import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;
  numCart: number = 0;

  constructor(private cartService: CartService,private http: HttpClient,private authService: AuthService) {}

  ngOnInit(): void {
    this.getCarrito();
    this.cartService.cartItems$.subscribe(items => {
      this.numCart = items.length;
    });
  }

  getCarrito(): void {
    this.carrito = this.cartService.getCarrito();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(funko: any): void {
    this.cartService.removeFromCart(funko);
    this.getCarrito();
  }

  updateCantidad(funko: any, cantidad: number): void {
    this.cartService.updateCantidad(funko, cantidad);
    this.getCarrito();
  }
  logout(): void {
    this.authService.logout();
  }
}
