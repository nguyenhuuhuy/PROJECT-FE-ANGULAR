import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Author} from "../model/Author";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  // private API_AUTHOR = environment.API_LOCAL + 'author';
  private API_AUTHOR = environment.API_SERVER + 'author';
// git conffig
  constructor(private httpClient: HttpClient) {
  }

  createAuthorService(author: Author): Observable<any> {
    return this.httpClient.post(this.API_AUTHOR, author);
  }

  getListAuthor(): Observable<any> {
    return this.httpClient.get(this.API_AUTHOR);
  }

  getAuthorById(id: number): Observable<any> {
    return this.httpClient.get(this.API_AUTHOR + '/' + id);
  }

  updateAuthor(id: number, author: Author): Observable<any> {
    return this.httpClient.put(this.API_AUTHOR + '/' + id, author);
  }

  deleteAuthorById(id: number): Observable<any> {
    return this.httpClient.delete(this.API_AUTHOR + '/' + id);
  }
}
