import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from "../services/video/video.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {CommentService} from "../services/comment/comment.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  video: any;
  videos: Array<any>;
  videoId: number;
  selectedValue: string;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.videoService.getAllVideosFromAWS().subscribe(data => {
      this.videos = data;
    });
    this.video = this.route.params.subscribe(params => {
      const id = params.id;
      console.log(id);
      if (id) {
        this.videoService.getVideoFromAWS(id).subscribe((video: any) => {
          if (video) {
            this.video = video;
            console.log(video);
          } else {
            console.log("You need a video id");
          }
        });
      }
    });
  }

  commentOnVideo(id: number) {
    console.log(this.selectedValue);
    this.commentService.addCommentToVideoArray(this.selectedValue, id);
    this.router.navigate(['/videos'])
  }

  backClick() {
    this._location.back();
  }
}

