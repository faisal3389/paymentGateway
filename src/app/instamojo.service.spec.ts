import { TestBed, inject } from '@angular/core/testing';

import { InstamojoService } from './instamojo.service';

describe('InstamojoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstamojoService]
    });
  });

  it('should be created', inject([InstamojoService], (service: InstamojoService) => {
    expect(service).toBeTruthy();
  }));
});
