import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: any;
  searchControl: FormControl;
  debounce: 400;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideoFromAWS(0).subscribe(data => {
      this.video = data;
    });
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        this.videoService.getVideoFromAWS(query).subscribe(data => {
          this.video = data;
        });
      });
  }

}
