import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {path:"Inicio",component:InicioComponent},
  {path:"Productos",component:ProductosComponent},
  {path:"Contacto",component:ContactoComponent},
  {path:"Productos/:idproductos",component:DetalleComponent},
  {path:"",redirectTo:"Inicio",pathMatch:'full'},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
