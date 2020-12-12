import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre:string="jose";
  alumno:any={
    nombres:"josesin",
    apellido:"agustino",
    edad:12
  }
  parafo:string="inputn";
  img:string="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cdf3787b2187a1f1239/cara-edad-real.jpg";
  
  user:string="";
  pass:string="";
  
  constructor() { }

  ngOnInit(): void {
  }

  ingresar()
  {
    console.log(this.user,this.pass);
  }
  valus(event)
  {
    console.log(event.target.value);
  }
  ing(event)
  {
    if(event.key=="Enter")
    {
      this.ingresar();
    }
  }
  
}
