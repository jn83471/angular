import { Injectable } from '@angular/core';
import { pedidoclass } from '../models/pedidos';
import { productosclass } from '../models/productos';
import { productodetalleclass } from '../models/pedidodetalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidosservice:pedidoclass=new pedidoclass()
  constructor() { }
  agregarproducto(prod:productosclass)
  {
    let pedidosdetalle:productodetalleclass=new productodetalleclass();
    pedidosdetalle.nonbre=prod.nombre;
    pedidosdetalle.cantidad=1;
    pedidosdetalle.presio=prod.presio;
    pedidosdetalle.id=prod.codigo;
    pedidosdetalle.total=pedidosdetalle.cantidad*pedidosdetalle.presio;
    let detalles:number=this.pedidosservice.pedidodetalle.filter(x=>pedidosdetalle.id==x.id).length;
    if(detalles>0)
    {
      let index:number= this.pedidosservice.pedidodetalle.findIndex(x=>x.id==pedidosdetalle.id);
      this.pedidosservice.pedidodetalle[index].cantidad++;
      this.pedidosservice.pedidodetalle[index].total+=pedidosdetalle.presio;
    }
    else{
      this.pedidosservice.pedidodetalle.push(pedidosdetalle);
    }
    console.log(this.pedidosservice);
  }
  actualizartotal()
  {
    let suma:number=0;
    for(let pedido of this.pedidosservice.pedidodetalle)
    {
      suma+=pedido.total;
    }
    this.pedidosservice.total=suma;
  }
  guardarlocalstorage()
  {
    localStorage.setItem("ultimo-p",JSON.stringify(this.pedidosservice));
  }
}
