import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public API = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  addCommentToVideoArray(comment: string, id: number) {
    /*const httpRequest = new HttpRequest('POST', this.API + 'comments/create/' + id, comment);
    return this.http.request(httpRequest);*/
    return this.http.post(this.API + 'comments/create/' + id, comment);
  }

}
