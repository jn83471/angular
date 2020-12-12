import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.css']
})
export class AgregarproductosComponent implements OnInit {
  formulario:FormGroup;
  constructor(private formb:FormBuilder,private product:ProductosService) { }

  ngOnInit(): void {
    this.formulario=this.formb.group({
      nombre:['',Validators.required],
      presio:['',Validators.required]
    })
  }
  agregar()
  { 
    this.product.agregarlocalstorage(this.formulario.value);
    this.formulario.reset;
  }

}
