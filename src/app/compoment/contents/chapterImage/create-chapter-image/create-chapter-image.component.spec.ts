import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChapterImageComponent } from './create-chapter-image.component';

describe('CreateChapterImageComponent', () => {
  let component: CreateChapterImageComponent;
  let fixture: ComponentFixture<CreateChapterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChapterImageComponent]
    });
    fixture = TestBed.createComponent(CreateChapterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
