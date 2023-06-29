import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStoryComponent } from './update-story.component';

describe('UpdateStoryComponent', () => {
  let component: UpdateStoryComponent;
  let fixture: ComponentFixture<UpdateStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStoryComponent]
    });
    fixture = TestBed.createComponent(UpdateStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
