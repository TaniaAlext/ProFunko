// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null; 
  private loginUrl =  'http://localhost:3000/login';  // URL del endpoint del backend
  private registerUrl = 'http://localhost:3000/registro';  // URL del endpoint de registro
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<string | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { username, password })
      .pipe(
        tap(response => {
          if (response && response.username) {
            this.currentUserSubject.next(response.username);
            this.user = response.username; // Actualizar el usuario
          }
        })
      );
  }

  register(username: string, password: string, rol: string): Observable<any> {
    return this.http.post<any>(this.registerUrl, { username, password });
  }

  

  getUser(): any {
    return this.user; // Devuelve el usuario almacenado
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.user;
  }

  get currentUserValue(): string | null {
    return this.currentUserSubject.value;
  }
  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(() => {
      // Limpiar datos del usuario
      localStorage.removeItem('token'); // Elimina el token o cualquier otro dato de sesión
      this.currentUserSubject.next(null); // Actualizar el usuario
      this.user = null; // Limpiar el usuario
      this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
    }, error => {
      console.error('Error al cerrar sesión', error);
    });
  }
}
