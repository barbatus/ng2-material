/// <reference path="angular2.d.ts" />

declare module ngMaterial {
  class MdButton {}

  class MdInput {}

  class MdInputContainer {}

  class MdCheckbox {}

  class MdSwitch {}

  class MdProgressLinear {}

  class MdRadioButton {}

  class MdRadioGroup {}

  class MdRadioDispatcher {}

  class MdGridList {}

  class MdGridTile {}

  class MdDialogRef {
    whenClosed: Promise<any>;

    close(result?: any); 
  }

  class MdDialogConfig {
    width: string;
    height: string;
  }

  class MdDialog {
    open(dlgComponent: ng.Type, elRef: ng.ElementRef, congif?: MdDialogConfig): ng.Promise<MdDialogRef>;
  }
}

declare module "ng2-material" {
  export = ngMaterial;
}
