import {APP_ID, Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Story} from "../model/Story";
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private API_STORY = environment.API_LOCAL + 'story';
  // private API_STORY = environment.API_SERVER + 'story';

  constructor(private httpClient: HttpClient) {
  }

  createStoryService(story: Story): Observable<any> {
    return this.httpClient.post(this.API_STORY, story);
  }

  getListStoryService(): Observable<any> {
    return this.httpClient.get(this.API_STORY);
  }

  getStoryById(id: number): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/' + id);
  }

  updateStory(id: number | undefined, story: Story): Observable<any> {
    return this.httpClient.put(this.API_STORY + '/' + id, story);
  }

  getPageStory(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get(this.API_STORY + '/page', {params});
  }

  getTopStory(): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/storyTop')
  }

  getRandomStory(): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/random')
  }

  blockStoryById(id: number): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/block-story/' + id);
  }

  getListStoryByCategory(id: number): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/storyByCategory/' + id);
  }

  searchStoryByName(search: string): Observable<any> {
    return this.httpClient.get(this.API_STORY + '/search/' + search);
  }

  private myBehaviorSubject = new BehaviorSubject<string>('');
  setValue(value: string) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
