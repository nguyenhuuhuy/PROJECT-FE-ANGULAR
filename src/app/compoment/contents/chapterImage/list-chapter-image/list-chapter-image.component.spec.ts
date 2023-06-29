import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChapterImageComponent } from './list-chapter-image.component';

describe('ListChapterImageComponent', () => {
  let component: ListChapterImageComponent;
  let fixture: ComponentFixture<ListChapterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChapterImageComponent]
    });
    fixture = TestBed.createComponent(ListChapterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
