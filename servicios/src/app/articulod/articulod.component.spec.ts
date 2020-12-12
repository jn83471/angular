import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulodComponent } from './articulod.component';

describe('ArticulodComponent', () => {
  let component: ArticulodComponent;
  let fixture: ComponentFixture<ArticulodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
