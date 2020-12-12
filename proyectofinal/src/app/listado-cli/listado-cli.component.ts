import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-cli',
  templateUrl: './listado-cli.component.html',
  styleUrls: ['./listado-cli.component.css']
})
export class ListadoCliComponent implements OnInit {

  clientes:any[]=new Array<any>();
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    //sin Id
    //this.firestore.collection("clientes").valueChanges().subscribe((x)=>{
    //  this.clientes=x;
    //});
    this.clientes.length=0;
    this.firestore.collection("clientes").get().subscribe((x)=>{
      
      x.docs.forEach((item)=>
      {
        let cliente=item.data();
        cliente.id=item.id;
        cliente.ref=item.ref;
        this.clientes.push(cliente);
      })

    })
  }

}
