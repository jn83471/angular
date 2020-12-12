import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceofipComponent } from './serviceofip.component';

describe('ServiceofipComponent', () => {
  let component: ServiceofipComponent;
  let fixture: ComponentFixture<ServiceofipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceofipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceofipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
