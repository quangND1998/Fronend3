import { TestBed } from '@angular/core/testing';

import { ReciptDetailService } from './recipt-detail.service';

describe('ReciptDetailService', () => {
  let service: ReciptDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciptDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
