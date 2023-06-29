import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChapterImageComponent } from './delete-chapter-image.component';

describe('DeleteChapterImageComponent', () => {
  let component: DeleteChapterImageComponent;
  let fixture: ComponentFixture<DeleteChapterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteChapterImageComponent]
    });
    fixture = TestBed.createComponent(DeleteChapterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
