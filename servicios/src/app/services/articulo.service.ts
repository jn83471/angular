import { Injectable } from '@angular/core';
import { articulos } from '../models/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  artic:articulos=new articulos();
  constructor() { }
  leernoticia
}
