import { TestBed } from '@angular/core/testing';

import { ServiceofipService } from './serviceofip.service';

describe('ServiceofipService', () => {
  let service: ServiceofipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceofipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
