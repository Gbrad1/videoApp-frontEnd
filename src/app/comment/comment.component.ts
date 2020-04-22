import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from '../services/video.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  video: any;
  currentComment: any;

  constructor(private commentService: VideoService) { }

ngOnInit(): void {
}

/*commentOnVideo(id) {
  this.commentService.addCommentToVideoArray(this.currentComment, id);
  console.log(this.video);
}*/
}
