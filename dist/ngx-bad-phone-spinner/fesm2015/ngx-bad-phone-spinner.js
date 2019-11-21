import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, EventEmitter, Output, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-bad-phone-spinner/ngx-bad-phone-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxBadPhoneSpinnerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-bad-phone-spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxBadPhoneSpinnerModule {
}
NgxBadPhoneSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxBadPhoneSpinnerComponent
                ],
                exports: [
                    NgxBadPhoneSpinnerComponent
                ],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-bad-phone-spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxBadPhoneSpinnerComponent, NgxBadPhoneSpinnerModule };

//# sourceMappingURL=ngx-bad-phone-spinner.js.map