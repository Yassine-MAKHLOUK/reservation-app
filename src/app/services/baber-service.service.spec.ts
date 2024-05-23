import { TestBed } from '@angular/core/testing';

import { BaberServiceService } from './baber-service.service';

describe('BaberServiceService', () => {
  let service: BaberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
