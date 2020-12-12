import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-articulod',
  templateUrl: './articulod.component.html',
  styleUrls: ['./articulod.component.css']
})
export class ArticulodComponent implements OnInit {

  constructor(public art:ArticuloService) { }

  ngOnInit(): void {
    if(this.art.artic.nombre==null)
    {
      this.art.artic.nombre="";
      this.art.artic.descripcion="";
      this.art.artic.peso=0;
      this.art.artic.usuario="";
      this.art.artic.precio=0;
      this.art.artic.fecha=new Date('00/00/000');
    }
  }

}
