import { TestBed } from '@angular/core/testing';

import { BaseygrService } from './baseygr.service';

describe('BaseygrService', () => {
  let service: BaseygrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseygrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
