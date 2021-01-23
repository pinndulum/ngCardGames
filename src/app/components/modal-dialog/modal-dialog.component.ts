import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class DialogModel {
  public readonly opts: { buttons?: { title: string; action?: string }[] };
  constructor(public title: string, public message: string) {
  }
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  title: string;
  message: string;
  buttons: { title: string; action?: string }[];

  constructor(
    private dialog: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogModel
  ) {
  }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
    this.buttons = this.data.opts.buttons || [{ title: 'OK' }];
  }

  onPress(action: string): void {
    this.dialog.close(action);
  }
}
