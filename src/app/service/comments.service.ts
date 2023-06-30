import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../model/Comments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private API_COMMENT = environment.API_LOCAL + 'comment';

  // private API_COMMENT = environment.API_SERVER + 'comment';

  constructor(private httpClient: HttpClient) {
  }

  createComment(comments: Comments): Observable<any> {
    return this.httpClient.post<any>(this.API_COMMENT, comments);
  }

  getPageComment(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get(this.API_COMMENT + '/page', {params});
  }

  getCommentByStoryId(id: number): Observable<any> {
    return this.httpClient.get(this.API_COMMENT + '/commentByStoryId/' + id);
  }
}
