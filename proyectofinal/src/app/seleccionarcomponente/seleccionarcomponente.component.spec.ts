import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarcomponenteComponent } from './seleccionarcomponente.component';

describe('SeleccionarcomponenteComponent', () => {
  let component: SeleccionarcomponenteComponent;
  let fixture: ComponentFixture<SeleccionarcomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarcomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
