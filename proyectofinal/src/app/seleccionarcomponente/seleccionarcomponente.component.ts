import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { clientes } from '../models/cliente';

@Component({
  selector: 'app-seleccionarcomponente',
  templateUrl: './seleccionarcomponente.component.html',
  styleUrls: ['./seleccionarcomponente.component.css']
})
export class SeleccionarcomponenteComponent implements OnInit {
  cl:clientes[]=new Array<clientes>();
  @Input("nombre") nombre:string;
  @Output("clienteseleccion") nombres=new EventEmitter(); 
  @Output("cancelo") cancelarcliente=new EventEmitter();
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<any>("clientes").get().subscribe((x)=>{
      this.cl.length=0;
      x.docs.forEach((y)=>{
        let client:any=y.data();
        client.id=y.id;
        client.ref=y.ref;
        client.visible=false;
        this.cl.push(client);
      })
    })
    console.log(this.cl);
  }

  buscar(event:string)
  {
    
    this.cl.forEach((x)=>{
      if(x.nombre.toLowerCase().includes(event.toLowerCase()))
      {
        x.visible=true;
      }
      else{
        x.visible=false;
      }
    })
    
  }
  enviarcliente(clien:clientes){
    this.nombre=clien.nombre+" "+clien.apellido;
    this.nombres.emit(clien);
  }
  cancelar()
  {
    this.nombres=undefined;
    this.cancelarcliente.emit();
  }

}
