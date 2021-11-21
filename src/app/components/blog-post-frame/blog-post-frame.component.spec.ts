import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFrameComponent } from './blog-post-frame.component';

describe('BlogPostFrameComponent', () => {
  let component: BlogPostFrameComponent;
  let fixture: ComponentFixture<BlogPostFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
