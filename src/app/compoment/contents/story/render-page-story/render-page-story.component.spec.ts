import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPageStoryComponent } from './render-page-story.component';

describe('RenderPageStoryComponent', () => {
  let component: RenderPageStoryComponent;
  let fixture: ComponentFixture<RenderPageStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderPageStoryComponent]
    });
    fixture = TestBed.createComponent(RenderPageStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
