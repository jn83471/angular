import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MensajesService } from '../services/mensajes.service';


@Component({
  selector: 'app-agregar-cli',
  templateUrl: './agregar-cli.component.html',
  styleUrls: ['./agregar-cli.component.css']
})
export class AgregarCliComponent implements OnInit {
  formulario: FormGroup;
  constructor(private mensajes:MensajesService,
    private ruta:Router,private datePipe: DatePipe, private fb: FormBuilder, private storage: AngularFireStorage, private afs: AngularFirestore, private ractive: ActivatedRoute) { }
  porcentaje: number = 0;
  urlx: string = "";
  editable: boolean = true;
  id:string="";

  ngOnInit(): void {
    this.formulario = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        correo: ['', Validators.compose([Validators.required, Validators.email])],
        fecha_nacimiento: ['', Validators.required],
        telefono: [''],
        cedula: [''],
        imgurl: ['', Validators.required]
      }
    )

    let id = this.ractive.snapshot.params.clienteID;
    if (id == null) {
      this.editable = false;
      
    }
    if (this.editable) {
      this.id=this.ractive.snapshot.params.clienteID;
      this.afs.doc<any>("clientes/" + id).valueChanges().subscribe((x) => {
        console.log(x);
        this.formulario.setValue({

          nombre: x.nombre,
          apellido: x.apellido,
          correo: x.correo,
          fecha_nacimiento: this.datePipe.transform(new Date(x.fecha_nacimiento.seconds * 1000), "yyyy-MM-dd").toString(),
          telefono: x.telefono,
          cedula: x.cedula,
          imgurl: ''
        })
      })
    }

  }
  agregar() {
    this.formulario.value.imgurl = this.urlx;
    this.formulario.value.fecha_nacimiento = new Date(this.formulario.value.fecha_nacimiento);
    this.afs.collection("clientes").add(this.formulario.value).then((x) => {
      this.mensajes.mensajebueno("Good job!", "se agrego");
    }).catch(()=>{
      this.mensajes.mensajeerror("Error!", "fallo en agregar");
    });
    this.formulario.reset();
  }

  editar()
  {
    this.formulario.value.imgurl = this.urlx;
    this.formulario.value.fecha_nacimiento = new Date(this.formulario.value.fecha_nacimiento);
    this.afs.doc("clientes/"+this.id).update(this.formulario.value).then((x)=>{
      this.mensajes.mensajebueno("Good job!", "se edito");
    }).catch(()=>{
      this.mensajes.mensajeerror("Error!", "fallo en editar");
    });
    this.ruta.navigateByUrl("/");
  }

  subirimagen(evento) {
    console.log(evento);
    if (evento.target.files[0] != null) {
      console.log("entro");
      let file = evento.target.files[0];
      let ruta = "clientes/" + new Date().getTime().toString() + file.name;
      const referencia = this.storage.ref(ruta);
      const tareapush = referencia.put(file);
      tareapush.then((variable) => {
        console.log("imagen subida");
        referencia.getDownloadURL().subscribe((x) => {
          this.urlx = x;
        })
      });
      tareapush.percentageChanges().subscribe((porcetnt) => {
        this.porcentaje = parseInt(porcetnt.toString());
      });
    }

  }

}
