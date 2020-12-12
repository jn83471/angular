import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceofipService } from '../services/serviceofip.service';
import { iptodos } from '../models/ip';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulariocreado:FormGroup;
  ippeticion:iptodos=new iptodos();
  constructor(private service:ServiceofipService,private formulario:FormBuilder) { }

  ngOnInit(): void {
    this.formulariocreado=this.formulario.group({
      title:['',Validators.required],
      completed:[true,Validators.required]
    });
  }
  agregar()
  {
    this.ippeticion=this.formulariocreado.value as iptodos;
    this.ippeticion.userId=1;
    console.log(this.ippeticion);
    this.service.guardar(this.ippeticion).subscribe((recivido)=>{
    console.log("felicidades");
    this.formulariocreado.reset();
    })
  }

}
