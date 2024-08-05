import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service'; 
import { FunkoService } from '../funko.service';

@Component({
  selector: 'app-funko',
  templateUrl: './funko.component.html',
  styleUrls: ['./funko.component.css']
})
export class FunkoComponent implements OnInit {
  user: any;
  funkos: any[] = [];
  categoriaa: any[] = []; 
  
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

  constructor(private http: HttpClient, private authService: AuthService,private funkoService: FunkoService,) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.getFunkos();
    this.getCategorias();
    this.user = this.authService.getUser();
  }

  editFunko(funko: any): void {
    this.funko = { ...funko };
  
    // Verificar y corregir id_categoria si es necesario
    if (this.funko.id_categoria === undefined || this.funko.id_categoria === null) {
      this.funko.id_categoria = this.categoriaa.length > 0 ? this.categoriaa[0].Id_categoria : null;
    }
  }
  

  getCategorias(): void {
    this.http.get<any[]>('http://localhost:3000/categoriaa').subscribe(data => {
      this.categoriaa = data;
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

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  createFunko(): void {
    const formData = new FormData();
    formData.append('Nombre', this.funko.Nombre);
    formData.append('precio', this.funko.precio);
    formData.append('cantidad', this.funko.cantidad);
    formData.append('id_categoria', this.funko.id_categoria);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }

    this.http.post('http://localhost:3000/funko', formData).subscribe(response => {
      this.getFunkos();
      this.clearForm();
    });
  }

  updateFunko(): void {
    const formData = new FormData();
    formData.append('Nombre', this.funko.Nombre);
    formData.append('precio', this.funko.precio ? this.funko.precio.toString() : '');
    formData.append('cantidad', this.funko.cantidad ? this.funko.cantidad.toString() : '');
    formData.append('id_categoria', this.funko.id_categoria.toString());
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    } else {
      formData.append('imagen_url', this.funko.imagen_url || '');
    }

    this.funkoService.updateFunko(this.funko.id_Funko, formData).subscribe(response => {
      this.getFunkos();
      this.clearForm();
    }, error => {
      console.error('Error al actualizar el Funko', error);
    });
  }

  deleteFunko(id: number): void {
    this.http.delete(`http://localhost:3000/funko/${id}`).subscribe(response => {
      this.getFunkos();
    });
  }

  clearForm(): void {
    this.funko = {
      id_Funko: null,
      Nombre: '',
      precio: null,
      cantidad: null,
      id_categoria: null,
      imagen_url: ''
    };
    this.selectedFile = null;
  }
}
