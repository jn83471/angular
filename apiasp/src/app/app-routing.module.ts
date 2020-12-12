import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetacreditoComponent } from './components/tarjetas/tarjetacredito/tarjetacredito.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

const routes: Routes = [
  {
    path:"", component:TarjetasComponent,
    children:[{
      path:"",component:TarjetacreditoComponent
    }]
  },
  {
    path:"index", component:TarjetasComponent,
    children:[{
      path:"",component:TarjetacreditoComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
