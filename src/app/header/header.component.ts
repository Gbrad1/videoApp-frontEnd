import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  url: string;
  file: File;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  siteName = 'VidStack';
  video: any;
  title: string;
  url: string;
  file: File;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPromptComponentDialog, {
      width: '500px',
      data: {name: this.title, video: this.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.url = result;
    });
  }
}

@Component({
  selector: 'dialog-prompt.component-dialog',
  templateUrl: 'dialog-prompt.component.html',
})
  export class DialogPromptComponentDialog {

  file: File;

  constructor(
    public dialogRef: MatDialogRef<DialogPromptComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


