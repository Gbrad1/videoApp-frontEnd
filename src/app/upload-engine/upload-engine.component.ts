import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {VideoService} from '../services/video.service';

@Component({
  selector: 'app-upload-engine',
  templateUrl: './upload-engine.component.html',
  styleUrls: ['./upload-engine.component.css']
})
export class UploadEngineComponent implements OnInit {

  searchControl: FormControl;
  debounce = 400;

  constructor(private videoService: VideoService ) { }

  ngOnInit(): void {
  }

  handle(file, videoTitle) {
    console.log({file});
    this.videoService.uploadVideo(file, videoTitle).subscribe(console.log);
  }

}
