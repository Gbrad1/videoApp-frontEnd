import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../services/video/video.service';
import {NgForm} from "@angular/forms";
import {CommentService} from "../services/comment/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  video: any;
  currentComment: any;

  constructor(private commentService: CommentService) { }

ngOnInit(): void {
}

  commentOnVideo(form: NgForm, id: number) {

  }

}
