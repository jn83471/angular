import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public userglobal:UsuariosService) { }

  ngOnInit(): void {
    console.log(this.userglobal.user.nombre);
  }
  agregar()
  {
    
  }
}
