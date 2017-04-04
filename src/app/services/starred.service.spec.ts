import { TestBed, inject } from '@angular/core/testing';

import { StarredService } from './starred.service';

describe('StarredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarredService]
    });
  });

  it('should ...', inject([StarredService], (service: StarredService) => {
    expect(service).toBeTruthy();
  }));
});
