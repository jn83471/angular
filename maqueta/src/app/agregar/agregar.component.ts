import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface usuarios
{
  nombre:string,
  correo:string,
  pass:string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formulario:FormGroup;
  isnuevo:boolean=true;
  index:number=-1;
  user:Array<usuarios>=new Array<usuarios>();
  constructor(private form:FormBuilder) { }

  ngOnInit(
  ): void {
    this.crearformulario();
  }
  crearformulario()
  {
    this.formulario=this.form.group({nombre:['carmen',Validators.required],correo:['',Validators.compose([Validators.required,Validators.email])],pass:['',Validators.compose([Validators.required,Validators.minLength(8)])]});
  }
  agregar()
  {
    this.user.push(this.formulario.value as usuarios);
    this.formulario.reset();
  }
  editarg()
  {
    this.user[this.index].nombre=this.formulario.value.nombre;
    this.user[this.index].correo=this.formulario.value.correo,
    this.user[this.index].pass=this.formulario.value.pass;
    this.formulario.reset();
    this.isnuevo=!(this.isnuevo);
  }
  editar(index:number)
  {
    this.formulario.setValue({nombre:this.user[index].nombre,correo:this.user[index].correo,pass:this.user[index].pass});
    this.index=index;
    this.isnuevo=false;
  }
  nuevo(){
    this.formulario.reset();
    this.isnuevo=!(this.isnuevo);
  }

  eliminar(del:number)
  {
    this.user.splice(del,1);
  }
}
