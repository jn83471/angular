import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarCliComponent } from './agregar-cli/agregar-cli.component';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'productos',component:ProductosComponent
  },
  {
    path:'pedidos',component:PedidosComponent
  },
  {
    path:'agregarclientes',component:AgregarCliComponent
  },
  {
    path:'agregar-productos',component:AgregarproductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
