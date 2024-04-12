import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { CardComponent } from './components/card/card.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { MapaGoogleComponent } from './components/mapa-google/mapa-google.component';
import { MapaOpenComponent } from './components/mapa-open/mapa-open.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    TablaComponent,
    CardComponent,
    DetalleComponent,
    MapaGoogleComponent,
    MapaOpenComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
