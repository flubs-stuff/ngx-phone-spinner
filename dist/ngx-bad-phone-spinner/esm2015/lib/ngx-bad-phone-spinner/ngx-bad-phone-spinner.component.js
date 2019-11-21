/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-bad-phone-spinner/ngx-bad-phone-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class NgxBadPhoneSpinnerComponent {
    constructor() {
        this.change = new EventEmitter();
        this.fullNumber = '0000000000';
        this.digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.locks = [false, false, false, false, false, false, false, false, false, false];
        this._propagateChange = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} digits
     * @return {?}
     */
    set number(digits) {
        /** @type {?} */
        const candidates = digits.split('');
        for (let i = 0; i < 10; i++) {
            this.digits[i] = typeof candidates[i] !== 'undefined' ? parseInt(candidates[i], 10) : 0;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.fullNumber = value || '0000000000';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    toggleLock(i) {
        this.locks[i] = !this.locks[i];
        this._onChange();
    }
    /**
     * @return {?}
     */
    randomize() {
        for (let i = 0; i < 10; i++) {
            if (this.locks[i] === false) {
                this.digits[i] = Math.round(Math.random() * 9);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _onChange() {
        this.fullNumber = '';
        for (let i = 0; i < 10; i++) {
            this.fullNumber += '' + this.digits[i];
        }
        this._propagateChange(this.fullNumber);
        this.change.emit(this.fullNumber);
    }
}
NgxBadPhoneSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-bad-phone-spinner',
                template: "<div class=\"ngx-bad-phone-spinner\">\n  <div class=\"inline-label\">(</div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[0] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(0)\"\n            [ngClass]=\"{ 'locked': locks[0], 'unlocked': locks[0] }\">\n      <span *ngIf=\"locks[0] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[0] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[1] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(1)\"\n            [ngClass]=\"{ 'locked': locks[1], 'unlocked': locks[1] }\">\n      <span *ngIf=\"locks[1] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[1] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[2] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(2)\"\n            [ngClass]=\"{ 'locked': locks[2], 'unlocked': locks[2] }\">\n      <span *ngIf=\"locks[2] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[2] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"inline-label\">)</div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[3] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(3)\"\n            [ngClass]=\"{ 'locked': locks[3], 'unlocked': locks[3] }\">\n      <span *ngIf=\"locks[3] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[3] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[4] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(4)\"\n            [ngClass]=\"{ 'locked': locks[4], 'unlocked': locks[4] }\">\n      <span *ngIf=\"locks[4] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[4] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[5] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(5)\"\n            [ngClass]=\"{ 'locked': locks[5], 'unlocked': locks[5] }\">\n      <span *ngIf=\"locks[5] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[5] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"inline-label\">-</div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[6] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(6)\"\n            [ngClass]=\"{ 'locked': locks[6], 'unlocked': locks[6] }\">\n      <span *ngIf=\"locks[6] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[6] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[7] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(7)\"\n            [ngClass]=\"{ 'locked': locks[7], 'unlocked': locks[7] }\">\n      <span *ngIf=\"locks[7] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[7] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[8] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(8)\"\n            [ngClass]=\"{ 'locked': locks[8], 'unlocked': locks[8] }\">\n      <span *ngIf=\"locks[8] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[8] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n  <div class=\"wrapper\">\n    <div>{{ digits[9] }}</div>\n\n    <button type=\"button\"\n            class=\"ripple\"\n            (click)=\"toggleLock(9)\"\n            [ngClass]=\"{ 'locked': locks[9], 'unlocked': locks[9] }\">\n      <span *ngIf=\"locks[9] === true\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z\"/>\n        </svg>\n      </span>\n\n      <span *ngIf=\"locks[9] === false\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-150 -100 700 700\">\n          <path d=\"M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z\"/>\n        </svg>\n      </span>\n    </button>\n  </div>\n\n\n  <button type=\"button\"\n          class=\"randomize-button ripple\"\n          (click)=\"randomize()\">\n    <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"random\" class=\"svg-inline--fa fa-random fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z\"></path></svg>\n  </button>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NgxBadPhoneSpinnerComponent)),
                        multi: true
                    }
                ],
                styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ngx-bad-phone-spinner .wrapper{border-top:1px solid rgba(0,0,0,.12);float:left;max-width:50px;padding:1px}.ngx-bad-phone-spinner .wrapper button{padding:.5rem;overflow:hidden;border:0}.ngx-bad-phone-spinner .wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.ngx-bad-phone-spinner .wrapper button:focus{outline:0}.ngx-bad-phone-spinner .wrapper button:disabled{cursor:not-allowed}.ngx-bad-phone-spinner .wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.ngx-bad-phone-spinner .wrapper div{align-items:center;border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem;font-size:1rem;flex:1;min-width:30px;text-align:center;vertical-align:unset}.ngx-bad-phone-spinner .inline-label{float:left;padding-top:0;padding-left:5px;padding-right:5px;font-size:2em}.ngx-bad-phone-spinner .ripple{background-position:center;transition:background .3s}.ngx-bad-phone-spinner .ripple:hover{cursor:pointer;background:radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 1%) center/15000% rgba(0,0,0,.12)}.ngx-bad-phone-spinner .ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background}.ngx-bad-phone-spinner .randomize-button{width:50px;border-radius:9px;margin-left:10px;height:37px}"]
            }] }
];
/** @nocollapse */
NgxBadPhoneSpinnerComponent.ctorParameters = () => [];
NgxBadPhoneSpinnerComponent.propDecorators = {
    change: [{ type: Output, args: ['change',] }],
    number: [{ type: Input, args: ['number',] }]
};
if (false) {
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype.change;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype.fullNumber;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype.digits;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype.locks;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype.disabled;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype._propagateChange;
    /** @type {?} */
    NgxBadPhoneSpinnerComponent.prototype._onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1iYWQtcGhvbmUtc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYmFkLXBob25lLXNwaW5uZXIvbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWdCekUsTUFBTSxPQUFPLDJCQUEyQjtJQXFCdEM7UUFwQmtCLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdwRSxlQUFVLEdBQVcsWUFBWSxDQUFDO1FBQ2xDLFdBQU0sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELFVBQUssR0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBSTFGLHFCQUFnQjs7O1FBQU8sR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO0lBR2hCLENBQUM7Ozs7O0lBbEJqQixJQUNJLE1BQU0sQ0FBQyxNQUFjOztjQUNqQixVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQzs7Ozs7SUFhRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxZQUFZLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsQ0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQTNFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLHVCQUF1QjtnQkFDbEMseWpZQUFxRDtnQkFJckQsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLEVBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7OztxQkFFRSxNQUFNLFNBQUMsUUFBUTtxQkFFZixLQUFLLFNBQUMsUUFBUTs7OztJQUZmLDZDQUFvRTs7SUFXcEUsaURBQWtDOztJQUNsQyw2Q0FBa0Q7O0lBQ2xELDRDQUEwRjs7SUFFMUYsK0NBQWtCOztJQUVsQix1REFBZ0M7O0lBQ2hDLGlEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogICduZ3gtYmFkLXBob25lLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neEJhZFBob25lU3Bpbm5lckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hCYWRQaG9uZVNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdudW1iZXInKVxuICBzZXQgbnVtYmVyKGRpZ2l0czogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGRpZ2l0cy5zcGxpdCgnJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuZGlnaXRzW2ldID0gdHlwZW9mIGNhbmRpZGF0ZXNbaV0gIT09ICd1bmRlZmluZWQnID8gcGFyc2VJbnQoY2FuZGlkYXRlc1tpXSwgMTApIDogMDtcbiAgICB9XG4gIH1cblxuICBmdWxsTnVtYmVyOiBzdHJpbmcgPSAnMDAwMDAwMDAwMCc7XG4gIGRpZ2l0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIGxvY2tzOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuXG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIF9wcm9wYWdhdGVDaGFuZ2U6YW55ID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxOdW1iZXIgPSB2YWx1ZSB8fCAnMDAwMDAwMDAwMCc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHRvZ2dsZUxvY2soaTpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMubG9ja3NbaV0gPSAhdGhpcy5sb2Nrc1tpXTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICByYW5kb21pemUoKTp2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxvY2tzW2ldID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRpZ2l0c1tpXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6dm9pZCB7XG4gICAgdGhpcy5mdWxsTnVtYmVyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmZ1bGxOdW1iZXIgKz0gJycgKyB0aGlzLmRpZ2l0c1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UodGhpcy5mdWxsTnVtYmVyKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZnVsbE51bWJlcik7XG4gIH1cbn1cbiJdfQ==