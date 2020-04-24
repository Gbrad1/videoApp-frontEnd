import {Component, Injectable, Input, OnInit} from '@angular/core';
import {VideoService} from '../services/video/video.service';
import {Observable} from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import {CommentService} from "../services/comment/comment.service";

@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  videoArray: Observable<any>;
  selectedVideo: any;
  commentArray: Observable<any>;

  constructor(private videoService: VideoService,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.videoService.getAllVideosFromAWS().subscribe(data => {
      this.videoArray = data;
    });
  }

  openVideoInNewTab(videoId: number) {
    this.videoService.getVideoFromAWS(videoId);
    console.log(videoId);
  }

  selectVideo(video: Video) { this.selectedVideo = video;}
}

export class Video {
  id: number;
  thumbsUp: number;
  thumbsDown: number;
  videoTitle: string;
  videoPath: string;
  initialTitle: string;
}
