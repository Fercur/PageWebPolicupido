import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  productos=[
    {id:1,nombre:"Bella",precio:"6.00",Detalle:"10 Rosas,1Girasol, 3 Mariposas, Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/Ramo1.png"},
    {id:2,nombre:"Bonita",precio:"3.00",Detalle:"4 Rosas, 1 Mariposa,Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/Ramo2.png"},
    {id:3,nombre:"Graduación",precio:"10.00",Detalle:"12 Rosas,1 Museta adorno, 3 Mariposa,Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/RamoGradoSF.png"}, 
    {id:4,nombre:"Valentine",precio:"3.00",Detalle:"3 Rosas, 1 Mariposa,Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/Ramo3P.png"},
    {id:5,nombre:"Coqueta",precio:"10.00",Detalle:"12 Rosas, 3 Mariposa,Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/Ramo4.png"},
    {id:6,nombre:"Reina",precio:"5.00",Detalle:"10 Rosas, 1 Mariposa,Tarjeta personalizable con código Qr o Spotify",imagen:"../../../assets/img/RamoRojo.png"}
  ];

}
