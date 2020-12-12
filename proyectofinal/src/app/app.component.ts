import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cargando:boolean=true;
  usuario:firebase.User;
  title = 'proyectofinal';
  constructor(public auth: AngularFireAuth){
    this.auth.user.subscribe((users)=>{
      setTimeout(()=>{
        this.cargando=false;
        this.usuario=users;
      },1000);
      
    })
  }

  login() {
    this.auth.signInWithEmailAndPassword("jn83471@gmail.com","AAaa1212@@");
  }
  logout() {
    this.auth.signOut();
  }
}
