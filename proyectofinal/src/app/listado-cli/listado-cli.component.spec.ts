import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCliComponent } from './listado-cli.component';

describe('ListadoCliComponent', () => {
  let component: ListadoCliComponent;
  let fixture: ComponentFixture<ListadoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
