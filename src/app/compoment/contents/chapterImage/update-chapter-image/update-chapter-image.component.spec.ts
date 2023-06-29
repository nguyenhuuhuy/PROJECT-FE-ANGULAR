import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChapterImageComponent } from './update-chapter-image.component';

describe('UpdateChapterImageComponent', () => {
  let component: UpdateChapterImageComponent;
  let fixture: ComponentFixture<UpdateChapterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChapterImageComponent]
    });
    fixture = TestBed.createComponent(UpdateChapterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
