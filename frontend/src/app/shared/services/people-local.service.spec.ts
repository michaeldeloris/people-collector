import { TestBed } from '@angular/core/testing';

import { PeopleLocalService } from './people-local.service';

describe('PeopleLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleLocalService = TestBed.get(PeopleLocalService);
    expect(service).toBeTruthy();
  });
});
