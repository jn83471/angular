import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { clientes } from '../models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';
import { pedidoclass } from '../models/pedidos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientesx:Array<clientes>=new Array<clientes>();
  constructor(private clientelist:ClientesService,private pedidos:PedidosService,private ruta:Router) { }

  ngOnInit(): void {
    this.clientesx=this.clientelist.clientlocal;
  }
  buscar(event)
  {
    let nombre:string=event.target.value;
    this.clientesx=this.clientelist.clientlocal.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(nombre)
    });
    
  }
  ver(cl:clientes)
  {
    this.pedidos.pedidosservice=new pedidoclass();
    this.pedidos.pedidosservice.client_id=cl.id;
    this.pedidos.pedidosservice.nombre=cl.nombre+" "+cl.apellido;
    this.pedidos.guardarlocalstorage();
    this.ruta.navigateByUrl("/productos");
    
  }

}
