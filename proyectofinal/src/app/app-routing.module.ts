import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCliComponent } from './listado-cli/listado-cli.component';
import { AgregarCliComponent } from './agregar-cli/agregar-cli.component';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';

const routes: Routes = [
  {
    path:'',component:InscripcionComponent
  },
{
  path:'clientes',component:ListadoCliComponent
},
{
  path:'agregar-cli',component:AgregarCliComponent
},
{
  path:'agregar-cli/:clienteID',component:AgregarCliComponent
},
{
  path:'precios',component:PreciosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
