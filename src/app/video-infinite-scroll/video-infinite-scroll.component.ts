import {Component, NgModule, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {HttpClient} from "@angular/common/http";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@Component({
  selector: 'app-video-infinite-scroll',
  templateUrl: './video-infinite-scroll.component.html',
  styleUrls: ['./video-infinite-scroll.component.css']
})
export class VideoInfiniteScrollComponent implements OnInit {
   allPost;
   allpost;
  notEmptyPost = false;
  notscrolly= true;

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loadInitPost();
  }
//load the  initial video from back end
  loadInitPost() {
    const url = 'http://tlino.96.lt/api/getblogpost';
    this.http.get(url).subscribe(data => {
      this.allPost = data[0];
    });
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.spinner.show();
      this.notscrolly = false;
      this.loadNextPost();
    }
  }

  //load in next 6 videos
  loadNextPost() {
    const url = 'http://tlino.96.lt/api/getblogpost';
    // return last post from the array
    const lastPost = this.allpost[this.allpost.length - 1];
    // get id of last post
    //  backend of this app use this id to get next 6 post
    const lastPostId = lastPost.id;
    // sent this id as key value pare using formdata()
    const dataToSend = new FormData();
    dataToSend.append('id', lastPostId);
    // call http request
    this.http.post(url, dataToSend)
      .subscribe( (data: any) => {

        const newPost = data[0];

        this.spinner.hide();

        if (newPost.length === 0 ) {
          this.notEmptyPost =  false;
        }
        // add newly fetched posts to the existing post
        this.allpost = this.allpost.concat(newPost);

        this.notscrolly = true;
      });
  }
}
