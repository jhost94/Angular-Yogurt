import { TestBed } from '@angular/core/testing';

import { YogurtService } from './yogurt.service';

describe('YogurtService', () => {
  let service: YogurtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YogurtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
