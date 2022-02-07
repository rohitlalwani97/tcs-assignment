import { TestBed } from '@angular/core/testing';

import { TcsServiceService } from './tcs-service.service';

describe('TcsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TcsServiceService = TestBed.get(TcsServiceService);
    expect(service).toBeTruthy();
  });
});
