/// <reference path="../typings/angular2.d.ts" />
/// <reference path="../typings/ng2-material.d.ts" />

import {Component, View, ElementRef, ViewEncapsulation, bootstrap} from 'angular2/angular2';

import {isPresent} from 'angular2/facade';

import {
  MdButton,
  MdDialog,
  MdDialogRef,
  MdDialogConfig
} from 'ng2-material';

@Component({
  selector: 'dialog',
  viewProviders: [MdDialog]
})
@View({
  template: ''
})
export class Dialog {
  _dialog: MdDialog;

  _elementRef: ElementRef;

  _dialogRef: MdDialogRef;

  _dialogConfig: MdDialogConfig;

  constructor(mdDialog: MdDialog, elementRef: ElementRef) {
    this._dialog = mdDialog;
    this._elementRef = elementRef;
    this._dialogConfig = new MdDialogConfig();

    this._dialogConfig.width = '400px';
    this._dialogConfig.height = '400px';
  }

  open() {
    if (isPresent(this._dialogRef)) {
      return;
    }

    this._dialog.open(DemoDialogComponent, this._elementRef, this._dialogConfig)
      .then(ref => {
        this._dialogRef = ref;

        ref.whenClosed.then(() => {
            this._dialogRef = null;
        });
      });
  }

  get opened() {
    return !!this._dialogRef;
  }

  close() {
    this._dialogRef.close();
  }
}

@Component({
  selector: 'demo-dialog'
})
@View({
  encapsulation: ViewEncapsulation.None,
  template: `
    <h2>This is the dialog content</h2>
    <div class="dialog-footer">
      <button md-raised-button class="md-primary" (click)="done()">
        OK
      </button>
      <button md-raised-button class="md-default" (click)="done()">
        Cancel
      </button>
    <div>
  `,
  directives: [
    MdButton
  ]
})
class DemoDialogComponent {
  dialogRef: MdDialogRef;

  constructor(dialogRef: MdDialogRef) {
    this.dialogRef = dialogRef;
  }

  done() {
    this.dialogRef.close();
  }
}
