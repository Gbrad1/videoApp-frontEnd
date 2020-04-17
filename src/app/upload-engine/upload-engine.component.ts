import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {VideoService} from '../services/video.service';

@Component({
  selector: 'app-upload-engine',
  templateUrl: './upload-engine.component.html',
  styleUrls: ['./upload-engine.component.css']
})
export class UploadEngineComponent implements OnInit {

  file: File;
  searchControl: FormControl;
  debounce = 400;

  constructor(private videoService: VideoService ) { }

  ngOnInit(): void {
  }

  handle(videoTitle, file) {
    console.log({file});
    this.file = file.files[0];
    this.videoService.uploadVideo(this.file).subscribe(console.log);
  }

}
