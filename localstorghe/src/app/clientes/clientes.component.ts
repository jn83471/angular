import { Component, OnInit } from '@angular/core';
interface cliente{
  nombre:string,
  apellido:string,
  edad:number;
}
interface produto{
  nombre:string,
  presio:number
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  pr:Array<produto>=new Array<produto>();

  constructor() { }

  ngOnInit(): void {
    /*this.clientes.push(
      {
        nombre:"maria",
        apellido:"gera",
        edad:12
      },
      {
        nombre:"jose",
        apellido:"maria",
        edad:12
      },
      {
        nombre:"la rosa",
        apellido:"josefa",
        edad:12
      }
    )
    this.pr.push({
      nombre:"sarten",
      presio:15
    },
    {
      nombre:"estufa",
      presio:2
    },
    {
      nombre:"cucharon",
      presio:30
    },
    {
      nombre:"chancla",
      presio:70
    }
    )*/
  }
  guardarcliente()
  {
    let clientesagregar:Array<cliente>=new Array<cliente>();
    clientesagregar.push(
      {
        nombre:"maria",
        apellido:"gera",
        edad:12
      },
      {
        nombre:"jose",
        apellido:"maria",
        edad:12
      },
      {
        nombre:"la rosa",
        apellido:"josefa",
        edad:12
      }
    )
    let productoslocaes:Array<produto>=new Array<produto>();
    productoslocaes.push(
      {
        nombre:"sarten",
        presio:15
      },
      {
        nombre:"estufa",
        presio:2
      },
      {
        nombre:"cucharon",
        presio:30
      },
      {
        nombre:"chancla",
        presio:70
      }
    )
    localStorage.setItem("clientes",JSON.stringify(clientesagregar));
    localStorage.setItem("producto",JSON.stringify(productoslocaes));
  }
  eliminar()
  {
    localStorage.removeItem("clientes");
  }
  eliminartodo()
  {
    localStorage.clear();
  }
  get clienteslocales():cliente[]
  {
    let clienteslocalstorage:cliente[] =JSON.parse(localStorage.getItem("clientes"));
    if(clienteslocalstorage==null){
      return new Array<cliente>();
    }
    return clienteslocalstorage;
  }
  get productoslocaes():produto[]
  {
    let peroductoslocalstorage:produto[] =JSON.parse(localStorage.getItem("producto"));
    if(peroductoslocalstorage==null){
      return new Array<produto>();
    }
    console.log(peroductoslocalstorage);
    return peroductoslocalstorage;
    
  }

}
