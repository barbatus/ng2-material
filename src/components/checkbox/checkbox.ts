import {Component, View, Attribute, ViewEncapsulation} from 'angular2/angular2';
import {isPresent, KeyboardEvent, NumberWrapper} from 'angular2/facade';
import {KeyCodes} from '../../core/key_codes';

@Component({
  selector: 'md-checkbox',
  inputs: ['checked', 'disabled'],
  host: {
    'role': 'checkbox',
    '[attr.aria-checked]': 'checked',
    '[attr.aria-disabled]': 'disabled',
    '[tabindex]': 'tabindex',
    '(keydown)': 'onKeydown($event)',
  }
})
@View({
  templateUrl: '/packages/barbatus_ng2-material/src/components/checkbox/checkbox.html',
  directives: [],
  encapsulation: ViewEncapsulation.None
})
export class MdCheckbox {
  /** Whether this checkbox is checked. */
  checked: boolean;

  /** Whether this checkbox is disabled. */
  disabled_: boolean;

  /** Setter for tabindex */
  tabindex: number;

  constructor(@Attribute('tabindex') tabindex: string) {
    this.checked = false;
    this.tabindex = isPresent(tabindex) ? NumberWrapper.parseInt(tabindex, 10) : 0;
    this.disabled_ = false;
  }

  get disabled() {
    return this.disabled_;
  }

  set disabled(value) {
    this.disabled_ = isPresent(value) && value !== false;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode == KeyCodes.SPACE) {
      event.preventDefault();
      this.toggle(event);
    }
  }

  toggle(event) {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }

    this.checked = !this.checked;
  }
}
