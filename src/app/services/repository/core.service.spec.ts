import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryService = TestBed.get(RepositoryService);
    expect(service).toBeTruthy();
  });
});
