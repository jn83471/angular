import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosService } from './services/usuarios.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticulodComponent } from './articulod/articulod.component';
import { ArticuloService } from './services/articulo.service';
import { ServiceofipComponent } from './serviceofip/serviceofip.component';
import { ServiceofipService } from './services/serviceofip.service';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    PerfilComponent,
    ArticulodComponent,
    ServiceofipComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsuariosService,ArticuloService,ServiceofipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
