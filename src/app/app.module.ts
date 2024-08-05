import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FunkoComponent } from './funko/funko.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { Router } from 'express';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { SpecsComponent } from './specs/specs.component';
import { FeaturesComponent } from './features/features.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CartService } from './cart.service';
import { FunkutallesComponent } from './funkutalles/funkutalles.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    FunkoComponent,
    UserComponent,
    HeaderComponent,
    CarouselComponent,
    CardsComponent,
    SpecsComponent,
    FeaturesComponent,
    RatingsComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComponent,
    FunkutallesComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    CartService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
