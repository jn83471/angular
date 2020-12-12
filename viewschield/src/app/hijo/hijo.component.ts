import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  titulo:string="hola soy un hijo"
  constructor() { }

  ngOnInit(): void {
  }

}
