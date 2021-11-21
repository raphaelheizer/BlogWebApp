import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertiesInfoComponent } from './post-properties-info.component';

describe('PostPropertiesInfoComponent', () => {
  let component: PostPropertiesInfoComponent;
  let fixture: ComponentFixture<PostPropertiesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPropertiesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPropertiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
