import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.css']
})
export class TarjetacreditoComponent implements OnInit {
  formularop:FormGroup
  constructor(private fb:FormBuilder,private tr:TarjetaService) { }
  ngOnInit(): void {
    this.formularop=this.fb.group({
      id:0,
      titular:["",Validators.required],
      numerotarjeta:["",Validators.compose([Validators.required, Validators.maxLength(3)])],
      fecha_expiracion:["",Validators.required],
      cvv:["",Validators.compose([Validators.required, Validators.maxLength(3)])]
    })
  }
  enviar()
  {
    let tarjetalocal={
      titular:this.formularop.get('titular').value,
      numerotarjeta:this.formularop.get('numerotarjeta').value,
      fecha_expiracion:this.formularop.get('fecha_expiracion').value,
      cvv:this.formularop.get('cvv').value
    }
    this.tr.guardartarjeta(tarjetalocal).subscribe(x=>{
      console.log("guardado exitoso")
    });
    this.formularop.reset();
  }

}
