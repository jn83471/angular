import { Injectable } from '@angular/core';
import swal from 'sweetalert'

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }
  mensajebueno(titulo:string,mensaje:string)
  {
    swal(titulo, mensaje, "success");
  }
  mensajeadvertencia(titulo:string,mensaje:string)
  {
    swal(titulo, mensaje, "warning");
  }
  mensajeerror(titulo:string,mensaje:string)
  {
    swal(titulo, mensaje, "error");
  }
}
