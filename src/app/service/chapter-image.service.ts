import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChapterImage} from "../model/ChapterImage";

@Injectable({
  providedIn: 'root'
})
export class ChapterImageService {
  // private API_CHAPTER_IMAGE = environment.API_LOCAL + 'chapterImage';
  private API_CHAPTER_IMAGE = environment.API_SERVER + 'chapterImage';

  constructor(private httpClient: HttpClient) {
  }

  createChapterImage(chapterImage: ChapterImage): Observable<any> {
    return this.httpClient.post<any>(this.API_CHAPTER_IMAGE, chapterImage);
  }

  getListChapterImage(): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER_IMAGE);
  }

  getChapterImageById(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER_IMAGE + "/" + id);
  }

  updateChapterImageById(id: number, chapterImage: ChapterImage): Observable<any> {
    return this.httpClient.put(this.API_CHAPTER_IMAGE + "/" + id, chapterImage);
  }

  deleteChapterImageById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_CHAPTER_IMAGE + '/' + id);
  }
  getListChapterImageByChapter(id:number): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER_IMAGE+'/getChapterByChapterImage/' +id);
  }
}
