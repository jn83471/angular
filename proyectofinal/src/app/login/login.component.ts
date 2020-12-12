import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  valido:boolean=false;
  errorformulario:boolean=false;
  texto:string='';
  constructor(private formb:FormBuilder,public auth: AngularFireAuth,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.formulario=this.formb.group({
      email:['',Validators.compose([Validators.email,Validators.required])],
      contra:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    })
  }

  login() {
    this.spinner.show();
    if(this.formulario.valid)
    {
      this.auth.signInWithEmailAndPassword(this.formulario.value.email,this.formulario.value.contra).then((usuaros)=>{
        this.spinner.hide();
        console.log(usuaros)
        
      }).catch((errores=>{
        this.spinner.hide();
        console.log(errores);
        this.texto=errores;
        this.errorformulario=true;
        
      }));
    }
    else{
      this.valido=true;
      this.texto='a habido un error y el formulario no es valido';
    }
  }
}
