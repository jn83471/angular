import { productodetalleclass } from './pedidodetalle';

export class pedidoclass
{
    id:number;
    client_id:number;
    nombre:string;
    pedidodetalle:Array<productodetalleclass>;
    total:number;
    constructor()
    {
        this.id=this.id;
        this.client_id=this.client_id;
        this.nombre=this.nombre;
        this.pedidodetalle=new Array<productodetalleclass>();
        this.total=this.total;
    }
}