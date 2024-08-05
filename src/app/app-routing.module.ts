import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { FunkoComponent } from './funko/funko.component';
import { UserComponent } from './user/user.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FunkutallesComponent } from './funkutalles/funkutalles.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'funko', component: FunkoComponent},
  {path: 'user',component:UserComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'funkutalles', component: FunkutallesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }
