import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarjeta } from '../models/tarjetamodel';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  puerto="https://localhost:44385/"
  url="api/tarjetas"
  constructor(private http:HttpClient) { }

  guardartarjeta(tarj:tarjeta):Observable<tarjeta>
  {
    return this.http.post<tarjeta>(this.puerto+this.url,tarj);
  }
}
