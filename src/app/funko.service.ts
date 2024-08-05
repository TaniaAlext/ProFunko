import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunkoService {
  private apiUrl = 'http://localhost:3000/funko';

  constructor(private http: HttpClient) { }

  getFunkos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createFunko(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  updateFunko(id: number, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }
  

  deleteFunko(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
