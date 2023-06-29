import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStoryComponent } from './block-story.component';

describe('BlockStoryComponent', () => {
  let component: BlockStoryComponent;
  let fixture: ComponentFixture<BlockStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockStoryComponent]
    });
    fixture = TestBed.createComponent(BlockStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
