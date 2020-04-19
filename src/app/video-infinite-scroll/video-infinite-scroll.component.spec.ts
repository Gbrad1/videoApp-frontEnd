import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInfiniteScrollComponent } from './video-infinite-scroll.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('VideoInfiniteScrollComponent', () => {
  let component: VideoInfiniteScrollComponent;
  let fixture: ComponentFixture<VideoInfiniteScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoInfiniteScrollComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
