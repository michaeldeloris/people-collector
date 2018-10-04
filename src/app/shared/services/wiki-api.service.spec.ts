import { TestBed } from '@angular/core/testing';

import { WikiApiService } from '../services/wiki-api.service';

describe('WikiApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiApiService = TestBed.get(WikiApiService);
    expect(service).toBeTruthy();
  });
});
