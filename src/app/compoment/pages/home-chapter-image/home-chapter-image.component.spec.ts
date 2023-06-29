import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChapterImageComponent } from './home-chapter-image.component';

describe('HomeChapterImageComponent', () => {
  let component: HomeChapterImageComponent;
  let fixture: ComponentFixture<HomeChapterImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChapterImageComponent]
    });
    fixture = TestBed.createComponent(HomeChapterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
