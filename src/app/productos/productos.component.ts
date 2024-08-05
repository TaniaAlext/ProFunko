import { Component, OnInit } from '@angular/core';
import { FunkoService } from '../funko.service';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  funkos: any[] = [];
  numCart: number = 0;
  funko: any = {
    id_Funko: null,
    Nombre: '',
    precio: null,
    cantidad: null,
    id_categoria: null,
    imagen_url: ''
  };
 
  selectedFile: File | null = null;
  baseUrl: string = 'http://localhost:3000'; // Base URL for images

  constructor(private funkoService: FunkoService, private cartService: CartService, private http: HttpClient,private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.getFunkos();
    this.cartService.cartItems$.subscribe(items => {
      this.numCart = items.length;
    });
  }

  getFunkos(): void {
    this.http.get<any[]>('http://localhost:3000/funko').subscribe(data => {
      this.funkos = data.map(funko => ({
        ...funko,
        imagen_url: funko.imagen_url ? `${this.baseUrl}${funko.imagen_url}` : ''
      }));
    });
  }

  addToCart(funko: any): void {
    this.cartService.addToCart(funko);
  }
 
  removeFromCart(funko: any): void {
    this.cartService.removeFromCart(funko);
  }

}
