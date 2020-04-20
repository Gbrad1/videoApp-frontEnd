import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VidStack';
  appName = 'VidStack';
  selectedFile = null;

  constructor(private http: HttpClient) {}

  onFilesSelected(event) {
    this.selectedFile = event.target.files[0];
  }
}
