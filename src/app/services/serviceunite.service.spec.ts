import { TestBed } from '@angular/core/testing';

import { ServiceuniteService } from './serviceunite.service';

describe('ServiceuniteService', () => {
  let service: ServiceuniteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceuniteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
