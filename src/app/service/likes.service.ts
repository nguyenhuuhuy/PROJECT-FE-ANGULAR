import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Likes} from "../model/Likes";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private API_LIKE = environment.API_LOCAL + 'likes';
  // private API_LIKE = environment.API_SERVER + 'likes';
  constructor(private httpClient: HttpClient) {
  }

  createLikes(likes: Likes): Observable<any> {
    return this.httpClient.post(this.API_LIKE, likes);
  }

  getListLikeByStory(id: number): Observable<any> {
    return this.httpClient.get(this.API_LIKE + '/likeByStory/' + id);
  }
}
