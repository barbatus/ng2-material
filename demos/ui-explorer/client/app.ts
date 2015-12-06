/// <reference path="../typings/angular2.d.ts" />
/// <reference path="../typings/ng2-material.d.ts" />

import {Component, View, bootstrap, ViewChild} from 'angular2/angular2';

import {
  MdButton,
  MdInput,
  MdInputContainer,
  MdCheckbox,
  MdSwitch,
  MdProgressLinear,
  MdRadioButton,
  MdRadioGroup,
  MdRadioDispatcher,
  MdGridList,
  MdGridTile
} from 'ng2-material';

import {Dialog} from './dialog';

@Component({
  selector: 'app',
  viewProviders: [MdRadioDispatcher]
})
@View({
  templateUrl: 'client/app.html',
  directives: [
    Dialog, MdButton, MdInput,
    MdInputContainer, MdCheckbox, MdSwitch,
    MdProgressLinear, MdRadioButton, MdRadioGroup,
    MdGridList, MdGridTile
  ]
})
export class App {
  @ViewChild(Dialog) dialog: Dialog;

  open() {
    this.dialog.open();
  }

  close() {
    this.dialog.close();
  }
}

bootstrap(App);
