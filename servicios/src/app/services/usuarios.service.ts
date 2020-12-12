import { Injectable } from '@angular/core';
import { usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  user:usuario=new usuario();
  constructor() {
    this.user.usuarioid=5;
    this.user.nombre="jose";
    this.user.apellido="castellano"
   }
}
