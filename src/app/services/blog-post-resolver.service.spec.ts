import { TestBed } from '@angular/core/testing';

import { BlogPostResolverService } from './blog-post-resolver.service';

describe('BlogPostResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostResolverService = TestBed.get(BlogPostResolverService);
    expect(service).toBeTruthy();
  });
});
