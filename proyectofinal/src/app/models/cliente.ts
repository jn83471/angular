import { DocumentReference } from '@angular/fire/firestore';

export class clientes{
    id:string;
    nombre:string;
    apellido:string;
    correo:string;
    fecha_nacimiento:Date;
    imgurl:string;
    telefono:string;
    cedula:string;
    ref:DocumentReference;
    visible:boolean;
    constructor(){
        this.nombre=this.nombre;
        this.apellido=this.apellido;
        this.correo=this.correo;
        this.fecha_nacimiento=this.fecha_nacimiento;
        this.imgurl=this.imgurl;
        this.telefono=this.telefono;
        this.cedula=this.cedula;
        this.visible=this.visible;
    }
}