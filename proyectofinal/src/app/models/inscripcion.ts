import { DocumentReference } from '@angular/fire/firestore';

export class ins
{
    fechainicio:Date;
    fechafinal:Date;
    cliente:DocumentReference;
    precios:DocumentReference;
    subtotal:number;
    total:number;

    constructor(){
        this.fechainicio=this.fechainicio;
        this.fechafinal=this.fechafinal;
        this.cliente=this.cliente;
        this.precios=this.precios;
        this.subtotal=this.subtotal;
        this.total=this.total;
    }
}