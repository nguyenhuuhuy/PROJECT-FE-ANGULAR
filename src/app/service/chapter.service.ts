import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chapter} from "../model/Chapter";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  // private API_CHAPTER = environment.API_LOCAL + 'chapter';
  private API_CHAPTER = environment.API_SERVER + 'chapter';

  constructor(private httpClient: HttpClient) {
  }

  createChapter(chapter: Chapter): Observable<any> {
    return this.httpClient.post<any>(this.API_CHAPTER, chapter);
  }

  updateChapter(id: number, chapter: Chapter): Observable<any> {
    return this.httpClient.put(this.API_CHAPTER + '/change-name/' + id, chapter);
  }

  getListChapter(): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER);
  }
  getChapterId(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER + '/' + id);
  }
  getChapterById(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER + '/detail/' + id);
  }

  getStoryByChapter(id: number): Observable<any> {
    return this.httpClient.get(this.API_CHAPTER + '/storyByChapter/' + id);
  }
  getChapterByStoryId(id:number): Observable<any>{
    return this.httpClient.get(this.API_CHAPTER + '/chapterByStory/' + id);
  }

  getChapterImageByChapterId(id:number):Observable<any>{
    return this.httpClient.get(this.API_CHAPTER + '/getChapterByChapterImage/' +id);
  }
}
