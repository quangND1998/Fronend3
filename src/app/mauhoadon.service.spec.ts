import { TestBed } from '@angular/core/testing';

import { MauhoadonService } from './mauhoadon.service';

describe('MauhoadonService', () => {
  let service: MauhoadonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MauhoadonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
