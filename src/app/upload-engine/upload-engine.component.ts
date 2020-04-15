import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-engine',
  templateUrl: './upload-engine.component.html',
  styleUrls: ['./upload-engine.component.css']
})
export class UploadEngineComponent implements OnInit {

  file: File;

  constructor() { }

  ngOnInit(): void {
  }

  handle(e) {
    this.file = e;
  }

}
