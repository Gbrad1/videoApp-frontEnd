import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {ReversePipe, VideoComponent} from './video/video.component';
import {FormsModule} from '@angular/forms';
import {DialogPromptComponentDialog} from './header/header.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {UploadEngineComponent} from './upload-engine/upload-engine.component';
import {FooterComponent} from './footer/footer.component';
import {MatVideoModule} from 'mat-video';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommentComponent} from "./comment/comment.component";
import {VideoService} from "./services/video/video.service";
import {CommentService} from "./services/comment/comment.service";
import { CommentsViewComponent } from './comments-view/comments-view.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    VideoComponent,
    DialogPromptComponentDialog,
    UploadEngineComponent,
    FooterComponent,
    ReversePipe,
    CommentComponent,
    CommentsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatVideoModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [
    VideoService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
