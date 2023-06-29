import { TestBed } from '@angular/core/testing';

import { ChapterImageService } from './chapter-image.service';

describe('ChapterImageService', () => {
  let service: ChapterImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChapterImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
