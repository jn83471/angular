import { Injectable } from '@angular/core';
import { iptodos } from '../models/ip';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceofipService {
  idip:iptodos=new iptodos();
  constructor(private http:HttpClient) { }
  leer_noticias():Observable<iptodos[]>
  {
    return this.http.get<iptodos[]>('https://jsonplaceholder.typicode.com/todos');
  }
  guardar(art:iptodos):Observable<iptodos>
  {
    return this.http.post<iptodos>('https://jsonplaceholder.typicode.com/posts',art);
  }
}
