import {Component, Injectable, Input, OnInit} from '@angular/core';
import {VideoService} from '../services/video.service';
import {Observable} from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import {HttpEventType} from '@angular/common/http';

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
  video: any;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideosFromAWS().subscribe(data => {
      this.videoArray = data;
    });
  }
}
