import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoArray: Observable<any>;
  video: any;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideosFromAWS().subscribe(data => {
      this.videoArray = data;
    });
  }
}
