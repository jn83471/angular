import { Component, OnInit } from '@angular/core';
import { articulos } from '../models/articulos';
import { usuario } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artic:Array<articulos>=new Array<articulos>();
  constructor(private usr:UsuariosService,private articsx:ArticuloService,private ruta:Router) { }
  
  ngOnInit(): void {
    this.artic.push(
      {nombre:"curso net",descripcion:"lorem op sutsu",precio:20,peso:1,usuario:this.usr.user.nombre+" "+this.usr.user.apellido,fecha:new Date()},
      {nombre:"curso java",descripcion:"lorem op sutsu",precio:20,peso:0,usuario:this.usr.user.nombre+" "+this.usr.user.apellido,fecha:new Date("07/10/2020")},
      {nombre:"curso angular",descripcion:"lorem op sutsu",precio:20,peso:0,usuario:this.usr.user.nombre+" "+this.usr.user.apellido,fecha:new Date("06/07/2020")},
      {nombre:"curso python",descripcion:"lorem op sutsu",precio:20,peso:0,usuario:this.usr.user.nombre+" "+this.usr.user.apellido ,fecha:new Date("05/16/2020")}
    )
  }
  navegar(articulo:articulos)
  {
    this.articsx.artic=articulo;
    this.ruta.navigateByUrl("/articulosdetalle");
  }

}
