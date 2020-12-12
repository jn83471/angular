import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TitulosComponent} from './titulos/titulos.component'
import {DirectivaComponent} from './directiva/directiva.component'
import {Page404Component} from './page404/page404.component'
import {UsuariosComponent} from './usuarios/usuarios.component'
import {AgregarusuarioComponent} from './usuarios/agregarusuario/agregarusuario.component'
import {EditarusuariosComponent} from './usuarios/editarusuarios/editarusuarios.component'
import {ArticulosComponent} from './articulos/articulos.component'
import {ArticulosdetalleComponent} from './articulosdetalle/articulosdetalle.component'
const routes: Routes = [
  {
    path:"",component:TitulosComponent
  },
  {
    path:"pipes",component:DirectivaComponent
  },
  {
    path:"usuario",component:UsuariosComponent,children:[
    {
      path:"agregar",component:AgregarusuarioComponent
    },
    {
      path:"editar",component:EditarusuariosComponent
    }]
  },
  {
    path:"articulos",component:ArticulosComponent
  },
  {
    path:"articulosdetalle",component:ArticulosdetalleComponent
  },
  {
    path:'**',component:Page404Component
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
