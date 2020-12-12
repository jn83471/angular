import { Component, OnInit } from '@angular/core';
import { ServiceofipService } from '../services/serviceofip.service';
import { iptodos } from '../models/ip';

@Component({
  selector: 'app-serviceofip',
  templateUrl: './serviceofip.component.html',
  styleUrls: ['./serviceofip.component.css']
})
export class ServiceofipComponent implements OnInit {
  idp:Array<iptodos>=new Array<iptodos>();
  constructor(public serv:ServiceofipService) { }

  ngOnInit(): void {
    this.serv.leer_noticias().subscribe((iptodoss)=>{
      this.idp=iptodoss;
    });
  }
  
}
