import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(funko: any): void {
    const item = this.carrito.find(i => i.id_Funko === funko.id_Funko);
    if (item) {
      item.cantidad += 1;
    } else {
      this.carrito.push({ ...funko, cantidad: 1 });
    }
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  getCarrito(): any[] {
    return this.carrito;
  }

  removeFromCart(funko: any): void {
    const index = this.carrito.findIndex(i => i.id_Funko === funko.id_Funko);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.cartItems.next([...this.carrito]);
    }
  }

  updateCantidad(funko: any, cantidad: number): void {
    const item = this.carrito.find(i => i.id_Funko === funko.id_Funko);
    if (item) {
      item.cantidad = cantidad;
      this.cartItems.next([...this.carrito]);
    }
  }

  getTotal(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  getCartCount(): number {
    return this.carrito.length;
  }

}
