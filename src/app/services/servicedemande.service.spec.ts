import { TestBed } from '@angular/core/testing';

import { ServicedemandeService } from './servicedemande.service';

describe('ServicedemandeService', () => {
  let service: ServicedemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
