import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosdetalleComponent } from './articulosdetalle.component';

describe('ArticulosdetalleComponent', () => {
  let component: ArticulosdetalleComponent;
  let fixture: ComponentFixture<ArticulosdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
