import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  cargando:boolean=true;
  texto:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a sapiente modi quam qui enim dolorem, quo voluptatibus vero earum ullam quia provident eius? Quod consequuntur voluptas tempore necessitatibus cumque!";
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando=false;
    }, 5000);
  }
  

}
