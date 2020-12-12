import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { ContinuaraPipe } from './continuara.pipe';
import { Page404Component } from './page404/page404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuarioComponent } from './usuarios/agregarusuario/agregarusuario.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosdetalleComponent } from './articulosdetalle/articulosdetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    ContinuaraPipe,
    Page404Component,
    EncabezadoComponent,
    UsuariosComponent,
    AgregarusuarioComponent,
    EditarusuariosComponent,
    ArticulosComponent,
    ArticulosdetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
