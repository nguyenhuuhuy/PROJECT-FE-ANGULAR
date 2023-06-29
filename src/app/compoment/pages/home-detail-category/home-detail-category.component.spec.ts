import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailCategoryComponent } from './home-detail-category.component';

describe('HomeDetailCategoryComponent', () => {
  let component: HomeDetailCategoryComponent;
  let fixture: ComponentFixture<HomeDetailCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDetailCategoryComponent]
    });
    fixture = TestBed.createComponent(HomeDetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
