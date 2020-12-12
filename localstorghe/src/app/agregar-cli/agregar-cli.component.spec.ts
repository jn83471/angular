import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCliComponent } from './agregar-cli.component';

describe('AgregarCliComponent', () => {
  let component: AgregarCliComponent;
  let fixture: ComponentFixture<AgregarCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
