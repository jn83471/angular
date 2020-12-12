import { Component, OnInit } from '@angular/core';
import { pedidoclass } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { productodetalleclass } from '../models/pedidodetalle';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido:pedidoclass;
  pedido_d:Array<productodetalleclass>=new Array<productodetalleclass>();
  constructor(private prod:PedidosService) { }

  ngOnInit(): void {
    this.pedido=this.ultimopedido;
    this.prod.pedidosservice=this.pedido;
    this.prod.actualizartotal();
  }

  get ultimopedido(): pedidoclass
  {
    let localstorg:pedidoclass=JSON.parse(localStorage.getItem("ultimo-p"));
    if(localstorg==null)
    {
      new pedidoclass();
    }
    else{
      return localstorg;
    }
  }
  calcular_total(ind)
  {
    this.pedido.pedidodetalle[ind].total=this.pedido.pedidodetalle[ind].presio*this.pedido.pedidodetalle[ind].cantidad;
    this.prod.pedidosservice=this.pedido;
    this.prod.actualizartotal();
    this.prod.guardarlocalstorage();
  }

  guardar()
  {
    let items:Array<pedidoclass>=new Array<pedidoclass>();
    items=this.variablecreadora;
    items.push(this.pedido);
    localStorage.setItem("pedidos",JSON.stringify(items));
    localStorage.removeItem("ultimo-p");
    this.pedido=new pedidoclass();
  }
  get variablecreadora():pedidoclass[]
  {
    let ped:pedidoclass[]=JSON.parse(localStorage.getItem("pedidos"));
    if(ped==null)
    {
      return new Array<pedidoclass>();
    }
    else
    {
      return ped;
    }
  }
}
