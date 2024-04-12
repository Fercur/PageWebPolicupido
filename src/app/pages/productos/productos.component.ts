import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  visualizacion=true
  btnNomenclatura="Tabla"
  cambiar(){
    this.visualizacion=!this.visualizacion
    if(this.visualizacion){
      this.btnNomenclatura="Tabla"
    }else{
      this.btnNomenclatura="Cards"
    }
  }
}
