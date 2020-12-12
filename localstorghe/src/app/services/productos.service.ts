import { Injectable } from '@angular/core';
import { productosclass } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor() { }
  agregarlocalstorage(client:productosclass)
  {
    let clientold=this.clientlocal;
    client.codigo=this.clientlocal.length+1;
    clientold.push(client);
    localStorage.setItem('productos',JSON.stringify(clientold));
  }
  get clientlocal():productosclass[]
  {
    let client:productosclass[]=JSON.parse(localStorage.getItem("productos"));
    if(client==null)
    {
      return new Array<productosclass>();
    }
    return client;

  }
}
