import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-cli',
  templateUrl: './agregar-cli.component.html',
  styleUrls: ['./agregar-cli.component.css']
})
export class AgregarCliComponent implements OnInit {
  formulario:FormGroup
  constructor(private formu:FormBuilder,private clients:ClientesService) { }
  client:clientes=new clientes();
  ngOnInit(): void {
    this.formulario=this.formu.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      direccion:['',Validators.required]
    })
  }

  agregar()
  {
    this.client=this.formulario.value as clientes;
    this.clients.agregarlocalstorage(this.client);
    this.formulario.reset();
  }
}
