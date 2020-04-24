import { Component, OnInit } from '@angular/core';
import {VideoService} from "../services/video/video.service";
import {CommentService} from "../services/comment/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.css']
})
export class CommentsViewComponent implements OnInit {

  video: any;
  comments: Array<any>;

  constructor(private videoService: VideoService,
              private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router,
              private _location: Location) { }

  ngOnInit(): void {
    this.video = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.commentService.getAllComments(id).subscribe(data => {
          this.comments = data;
      });
      }
    });
  }
}
