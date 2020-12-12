import { Component, OnInit } from '@angular/core';
import { clientes } from '../models/cliente';
import { ins } from '../models/inscripcion';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  inscripcion:ins=new ins();
  cl:clientes=new clientes();
  constructor() { }

  ngOnInit(): void {
  }

  asignar(event:clientes)
  {
    this.inscripcion.cliente=event.ref;
    this.cl=event;
  }
  cancelar(){
    this.inscripcion.cliente=undefined;
    this.cl=undefined;
  }
}
