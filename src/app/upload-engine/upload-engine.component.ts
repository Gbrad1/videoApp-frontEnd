import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-upload-engine',
  templateUrl: './upload-engine.component.html',
  styleUrls: ['./upload-engine.component.css']
})
export class UploadEngineComponent implements OnInit {

  file: File;
  searchControl: FormControl;
  debounce = 400;

  constructor() { }

  ngOnInit(): void {
  }

  handle(e) {
    this.file = e;
  }

}
