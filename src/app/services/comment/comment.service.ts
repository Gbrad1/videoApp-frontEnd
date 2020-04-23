import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  addCommentToVideoArray(comment: any, id: number) {
    const httpRequest = new HttpRequest('PUT', this.API + 'video/comment/' + id, comment);
    return this.http.request(httpRequest);
  }

}
