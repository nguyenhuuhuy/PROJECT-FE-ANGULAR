import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStoryComponent } from './search-story.component';

describe('SearchStoryComponent', () => {
  let component: SearchStoryComponent;
  let fixture: ComponentFixture<SearchStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchStoryComponent]
    });
    fixture = TestBed.createComponent(SearchStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
