import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { productosclass } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  generarpedido:boolean=false;
  productos:Array<productosclass>=new Array<productosclass>();
  constructor(private prod:ProductosService,private pedidos:PedidosService) { }

  ngOnInit(): void {
    this.productos=this.prod.clientlocal;
  }
  buscar(event)
  {
    let prod:string=event.target.value;
    this.productos=this.prod.clientlocal.filter(c=>{
      return c.nombre.toLocaleLowerCase().includes(prod.toLocaleLowerCase())
    })
  }
  agregarpedido(ped:productosclass)
  {
    this.pedidos.agregarproducto(ped);
    this.generarpedido=true;
    this.pedidos.guardarlocalstorage();
  }

}
