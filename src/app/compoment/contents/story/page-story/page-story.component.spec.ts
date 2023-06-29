import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStoryComponent } from './page-story.component';

describe('PageStoryComponent', () => {
  let component: PageStoryComponent;
  let fixture: ComponentFixture<PageStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStoryComponent]
    });
    fixture = TestBed.createComponent(PageStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
