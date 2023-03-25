import { TestBed } from '@angular/core/testing';

import { VaildatorsService } from './vaildators.service';

describe('VaildatorsService', () => {
  let service: VaildatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaildatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
