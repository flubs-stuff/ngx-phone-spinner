import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {LockOptions, NgxBadPhoneSpinnerOptions} from '../ngx-bad-phone-spinner.model';

@Component({
  selector:    'ngx-bad-phone-spinner',
  templateUrl: './ngx-bad-phone-spinner.component.html',
  styleUrls: [
    './ngx-bad-phone-spinner.component.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxBadPhoneSpinnerComponent),
      multi: true
    }
  ]
})
export class NgxBadPhoneSpinnerComponent implements ControlValueAccessor {
  private _onTouched:() => void;
  private _propagateChange:any = () => {};

  public fullNumber:string = '0000000000';
  public digits:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public locks:boolean[] = [false, false, false, false, false, false, false, false, false, false];
  public lockIcons:boolean[] = [false, false, false, false, false, false, false, false, false, false];

  public disabled:boolean;

  @Input() options:NgxBadPhoneSpinnerOptions = new NgxBadPhoneSpinnerOptions();

  @Input()
  set number(digits:string) {
    const candidates = digits.split('');

    for (let i = 0; i < 10; i++) {
      this.digits[i] = typeof candidates[i] !== 'undefined' ? parseInt(candidates[i], 10) :0;
    }
  }

  @Output() change:EventEmitter<string>;

  constructor() {
    this.change = new EventEmitter<string>();
  }

  writeValue(value:string):void {
    this.fullNumber = value || '0000000000';
  }

  registerOnChange(fn:any):void {
    this._propagateChange = fn;
  }

  registerOnTouched(fn:any):void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled:boolean):void {
    this.disabled = isDisabled;
  }

  toggleLock(i:number):void {
    let canChange = true;
    if (i !== 0) {
      if (this.options.locks.indexOf(LockOptions.ORDER) !== -1) {
        if (i !== 0) {
          if (this.locks[i - 1] === false) {
            canChange = false;
          }
        }
      }

      if (this.options.unlocks.indexOf(LockOptions.ORDER) !== -1) {
        if (i !== 0) {
          if (this.locks[i - 1] === true) {
            canChange = false;
          }
        }
      }
      if (this.options.locks.indexOf(LockOptions.REVERSE) !== -1) {
        if (i + 1 < this.locks.length) {
          if (this.locks[i + 1] === false) {
            canChange = false;
          }
        }
      }

      if (this.options.unlocks.indexOf(LockOptions.REVERSE) !== -1) {
        if (i + 1 < this.locks.length) {
          if (this.locks[i + 1] === true) {
            canChange = false;
          }
        }
      }
    }

    if (this.options.unlocks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
      canChange = false;
    }

    if (this.options.locks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
      canChange = false;
    }

    if (canChange) {
      this.locks[i] = !this.locks[i];

      if (this.locks[i]) {
        if (this.options.unlocks.indexOf(LockOptions.RANDOM) !== -1) {
          setTimeout(
            () => {
              this.locks[i] = false;
            },
            Math.random() * 1000 * 60
          );
        }
      } else {
        if (this.options.locks.indexOf(LockOptions.RANDOM) !== -1) {
          setTimeout(
            () => {
              this.locks[i] = true;
            },
            Math.random() * 1000 * 60
          );
        }
      }

      this._onChange();
    }
  }

  randomize():void {
    for (let i = 0; i < 10; i++) {
      if (this.locks[i] === false) {
        for (let j = 0; j < 5; j++) {
          setTimeout(
            () => {
              this.digits[i] = Math.round(Math.random() * 9);
            },
            200
          );
        }
      }
    }

    const shuffleLock = this.options.locks.indexOf(LockOptions.SHUFFLE) !== -1;
    const shuffleUnlock = this.options.unlocks.indexOf(LockOptions.SHUFFLE) !== -1;
    if (shuffleLock || shuffleUnlock) {
      for (let i = 0; i < 10; i++) {
        if (this.locks[i] === false && shuffleLock) {
          this.locks[i] = true;
        }

        if (this.locks[i] === true && shuffleUnlock) {
          this.locks[i] = false;
        }

        if (this.showLockIcon(i)) {
          this.lockIcons[i] = true;
        } else if (this.showUnlockIcon(i)) {
          this.lockIcons[i] = false;
        }
      }
    }
  }

  showLockIcon(i:number):boolean {
    let showLockIcon = this.locks[i];
    if (this.options.locks.indexOf(LockOptions.LIAR) !== -1) {
      if (Math.random() < 0.25) {
        showLockIcon = !this.locks[i];
      }
    }

    return showLockIcon;
  }

  showUnlockIcon(i:number):boolean {
    let showUnlockIcon = this.locks[i];
    if (this.options.unlocks.indexOf(LockOptions.LIAR) !== -1) {
      if (Math.random() < 0.25) {
        showUnlockIcon = !this.locks[i];
      }
    }

    return showUnlockIcon;
  }

  private _onChange():void {
    this.fullNumber = '';
    for (let i = 0; i < 10; i++) {
      this.fullNumber += '' + this.digits[i];
    }

    this._propagateChange(this.fullNumber);
    this.change.emit(this.fullNumber);
  }
}
