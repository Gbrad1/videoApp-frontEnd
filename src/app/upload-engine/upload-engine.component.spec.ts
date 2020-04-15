import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEngineComponent } from './upload-engine.component';

describe('UploadEngineComponent', () => {
  let component: UploadEngineComponent;
  let fixture: ComponentFixture<UploadEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
