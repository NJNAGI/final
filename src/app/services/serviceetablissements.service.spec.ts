import { TestBed } from '@angular/core/testing';

import { ServiceetablissementsService } from './serviceetablissements.service';

describe('ServiceetablissementsService', () => {
  let service: ServiceetablissementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceetablissementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
