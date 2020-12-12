import { Component, ViewChild, ElementRef } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewschield';
  @ViewChild('inputname',{static:true}) inputname:ElementRef;
  @ViewChild(HijoComponent,{static:true}) hijo:HijoComponent;
  mostrar()
  {
    this.inputname.nativeElement.style.background="red";
    this.hijo.titulo="lo modifique desde el padre";
    console.log(this.inputname);
  }
}
