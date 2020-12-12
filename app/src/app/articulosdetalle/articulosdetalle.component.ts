import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {articulos} from '../models/articulos'

@Component({
  selector: 'app-articulosdetalle',
  templateUrl: './articulosdetalle.component.html',
  styleUrls: ['./articulosdetalle.component.css']
})
export class ArticulosdetalleComponent implements OnInit {
  artic:articulos;
  nombre:string;
  constructor(private ruta: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.artic=JSON.parse(this.ruta.snapshot.params.artic);
  }

}
