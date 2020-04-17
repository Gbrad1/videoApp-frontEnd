import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public API = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getVideoFromAWS(videoId: number): Observable<any> {
    return this.http.get(this.API + '/video/' + videoId);
  }
  uploadVideo(video) {
    return this.http.post(this.API + '/video/upload', video);
  }

  /*getVideo(video, title, path):{video:any, title:string, path: string} {
    return {video, title, path};
  }*/
}
