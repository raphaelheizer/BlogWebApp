import { TestBed } from '@angular/core/testing';

import { BlogPostRepositoryService } from './blog-post-repository.service';

describe('BlogPostRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostRepositoryService = TestBed.get(BlogPostRepositoryService);
    expect(service).toBeTruthy();
  });
});
