import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {LockOptions, NgxBadPhoneSpinnerOptions} from '../ngx-bad-phone-spinner.model';
import { NgxSmartModalService } from 'ngx-smart-modal';

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

  public disabled:boolean;
  public modalI:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public lastI:number = 0;

  @Input() options:NgxBadPhoneSpinnerOptions = new NgxBadPhoneSpinnerOptions();

  @Input('number')
  set number(digits:string) {
    const candidates = digits.split('');

    for (let i = 0; i < 10; i++) {
      this.digits[i] = typeof candidates[i] !== 'undefined' ? parseInt(candidates[i], 10) :0;
    }
  }

  @Output() change:EventEmitter<string>;

  constructor(
    public modalService:NgxSmartModalService
  ) {
    this.change = new EventEmitter<string>();
  }

  getCancelText():string {
    let text = '';
    if (this.modalI[this.lastI] && this.options.modals[this.modalI[this.lastI]]) {
      text = this.options.modals[this.modalI[this.lastI]].cancel;
    }

    return text;
  }

  getConfirmText():string {
    let text = '';
    if (this.modalI[this.lastI] && this.options.modals[this.modalI[this.lastI]]) {
      text = this.options.modals[this.modalI[this.lastI]].confirm;
    }

    return text;
  }

  getTextText():string {
    let text = '';
    if (this.modalI[this.lastI] && this.options.modals[this.modalI[this.lastI]]) {
      text = this.options.modals[this.modalI[this.lastI]].text;
    }

    return text;
  }

  getTitleText():string {
    let text = '';
    if (this.modalI[this.lastI] && this.options.modals[this.modalI[this.lastI]]) {
      text = this.options.modals[this.modalI[this.lastI]].title;
    }

    return text;
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
    this.lastI = i;

    // if (this.locks[i] === false && this.modalI[i] < this.options.modals.length) {
    if (this.locks[i] === false && this.modalI[i] < this.options.modals.length) {
      this.modalI[i]++;

      this.modalService.resetModalData('badModal');
      this.modalService.open('badModal');
    } else {
      this.locks[i] = !this.locks[i];

      if (this.locks[i]) {
        if (this.options.unlocks.indexOf(LockOptions.RANDOM) !== -1) {
          const self = this;
          setTimeout(
            () => {
              self.locks[i] = false;
            },
            Math.random() * 1000 * 60
          );
        }

        if (this.options.unlocks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
          this.locks[i] = false;

          this.modalI[i]--;
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

        if (this.options.locks.indexOf(LockOptions.IGNORE) !== -1 && Math.random() < 0.5) {
          this.locks[i] = true;
        }
      }

      this._onChange();
    }
  }

  modalClosed(event:boolean):void {
    if (event) {
      setTimeout(
        () => {
          this.toggleLock(this.lastI);
        },
        500
      );
    } else {
      this.modalI[this.lastI] = 0;
    }
  }

  randomize():void {
    for (let i = 0; i < 10; i++) {
      if (this.locks[i] === false) {
        this.digits[i] = Math.round(Math.random() * 9);
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
      }
    }

    this.modalI = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
