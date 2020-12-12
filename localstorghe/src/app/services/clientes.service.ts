import { Injectable } from '@angular/core';
import { clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  constructor() { }
  agregarlocalstorage(client:clientes)
  {
    let clientold=this.clientlocal;
    client.id=this.clientlocal.length+1;
    clientold.push(client);
    localStorage.setItem('clientes',JSON.stringify(clientold));
  }
  get clientlocal():clientes[]
  {
    let client:clientes[]=JSON.parse(localStorage.getItem("clientes"));
    if(client==null)
    {
      return new Array<clientes>();
    }
    return client;

  }
}
