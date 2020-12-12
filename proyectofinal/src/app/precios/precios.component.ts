import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MensajesService } from '../services/mensajes.service';



@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
 formulario:FormGroup;
 precios:any[]=new Array<any>();
 idg:string="";
 editara:boolean=false;
  constructor(private msj:MensajesService,private fb:FormBuilder,private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      costo:['',Validators.required],
      duracion:['',Validators.required],
      tipoduracion:['',Validators.required]
    })
    this.afs.collection("precios").get().subscribe((x)=>{
      x.docs.forEach((y)=>{
        let precio=y.data();
        precio.id=y.id;
        precio.ref=y.ref;
        this.precios.push(precio);

      })
    })
  }

  agregar()
  {
    this.afs.collection("precios").add(this.formulario.value).then(()=>
    {
      this.msj.mensajebueno("bueno","se efectuo");
      this.precios=new Array();
      this.afs.collection("precios").get().subscribe((x)=>{
        x.docs.forEach((y)=>{
          let precio=y.data();
          precio.id=y.id;
          precio.ref=y.ref;
          this.precios.push(precio);
  
        })
      })


    }).catch(()=>
    {
      this.msj.mensajeerror("mal!","no se pudo");
    });
    this.formulario.reset();
  }
  editar()
  {
    this.afs.doc("precios/"+this.idg).update(this.formulario.value).then((x)=>{
      this.precios=new Array();
      this.afs.collection("precios").get().subscribe((x)=>{
        x.docs.forEach((y)=>{
          let precio=y.data();
          precio.id=y.id;
          precio.ref=y.ref;
          this.precios.push(precio);
  
        })
      });
      this.formulario.reset();
      this.msj.mensajebueno("Good job!", "se edito");
      
    }).catch(()=>{
      this.formulario.reset();
      this.msj.mensajeerror("Error!", "fallo en editar");
    });
    
  }
  mandar(id:string)
  {
    this.idg=id;
    this.afs.doc<any>("precios/" + id).valueChanges().subscribe((x) => {
      console.log(x);
      this.editara=true;
      this.formulario.setValue({
        nombre:x.nombre,
        costo:x.costo,
        duracion:x.duracion,
        tipoduracion:x.tipoduracion
      })
    })
  }

  



}
