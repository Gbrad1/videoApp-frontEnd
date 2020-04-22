import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-upload-engine',
  templateUrl: './upload-engine.component.html',
  styleUrls: ['./upload-engine.component.css']
})
export class UploadEngineComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  currentTitle: string;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: VideoService ) { }

  ngOnInit(): void {
  }

  handle(file, videoTitle) {
    console.log(videoTitle);
    console.log({file});
    this.uploadService.uploadVideo(videoTitle, file.item[0]).subscribe(console.log);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.uploadVideo(this.currentFileUpload, this.currentTitle).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File Uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

}
