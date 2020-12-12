import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticulodComponent } from './articulod/articulod.component';
import { ServiceofipComponent } from './serviceofip/serviceofip.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'perfil',component:PerfilComponent
  },
  {
    path:'articulosdetalle',component:ArticulodComponent
  },
  {
    path:'ipservice',component:ServiceofipComponent
  },
  {
    path:'agregar',component:FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
