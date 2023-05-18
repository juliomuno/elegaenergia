import { TestBed } from '@angular/core/testing';

import { ElegaService } from './elega.service';

describe('ElegaService', () => {
  let service: ElegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
