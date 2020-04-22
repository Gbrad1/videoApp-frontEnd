import {Component, Injectable, Input, OnInit} from '@angular/core';
import {VideoService} from '../services/video.service';
import {Observable} from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import {NgForm} from "@angular/forms";

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
  selectedValue: string;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideosFromAWS().subscribe(data => {
      this.videoArray = data;
    });
  }

  commentOnVideo(form: NgForm, id: number) {
    this.videoService.addCommentToVideoArray(form, id);
    console.log(form);
    console.log(id);
    console.log(this.selectedValue);
  }
}
