import { Component, OnInit } from '@angular/core';
import {articulos} from '../models/articulos'
import { Router } from '@angular/router';



@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  artic:Array<articulos>=new Array<articulos>();
  constructor(private ruta:Router) { }

  ngOnInit(): void {
    this.artic.push({nombre:"television",descripcion:"es un televisor",presio:12},{nombre:"computadora dell",descripcion:"es una compu osea",presio:30});
    console.log(this.artic);
  }

  enviar(articr:articulos)
  {
    this.ruta.navigate(['articulosdetalle',{artic:JSON.stringify(articr)}])
  }

}
