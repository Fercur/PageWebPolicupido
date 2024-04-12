import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  visualizar=true
  btnNomenclatura="Google"
  cambiar(){
    this.visualizar=!this.visualizar
    if(this.visualizar){
      this.btnNomenclatura="Google"

    }else{
      this.btnNomenclatura="Open"
    }
  }
}
