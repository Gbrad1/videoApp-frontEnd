import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  addCommentToVideoArray(comment: string, id: number) {
    console.log(this.API + 'comments/create/');
    return this.http.post(this.API + 'comments/create/' + id, comment);
  }

  getAllComments(id: number): Observable<any> {
    return this.http.get(this.API + 'comments/videos/' + id);
  }

}
