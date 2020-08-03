import { TestBed } from '@angular/core/testing';

import { CoquanthueService } from './coquanthue.service';

describe('CoquanthueService', () => {
  let service: CoquanthueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoquanthueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
