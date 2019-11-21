/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-bad-phone-spinner/ngx-bad-phone-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var NgxBadPhoneSpinnerComponent = /** @class */ (function () {
    function NgxBadPhoneSpinnerComponent() {
        this.change = new EventEmitter();
        this.fullNumber = '0000000000';
        this.digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.locks = [false, false, false, false, false, false, false, false, false, false];
        this._propagateChange = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(NgxBadPhoneSpinnerComponent.prototype, "number", {
        set: /**
         * @param {?} digits
         * @return {?}
         */
        function (digits) {
            /** @type {?} */
            var candidates = digits.split('');
            for (var i = 0; i < 10; i++) {
                this.digits[i] = typeof candidates[i] !== 'undefined' ? parseInt(candidates[i], 10) : 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.fullNumber = value || '0000000000';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.toggleLock = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.locks[i] = !this.locks[i];
        this._onChange();
    };
    /**
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype.randomize = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < 10; i++) {
            if (this.locks[i] === false) {
                this.digits[i] = Math.round(Math.random() * 9);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxBadPhoneSpinnerComponent.prototype._onChange = /**
     * @private
     * @return {?}
     */
    function () {
        this.fullNumber = '';
        for (var i = 0; i < 10; i++) {
            this.fullNumber += '' + this.digits[i];
        }
        this._propagateChange(this.fullNumber);
        this.change.emit(this.fullNumber);
    };
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
                            function () { return NgxBadPhoneSpinnerComponent; })),
                            multi: true
                        }
                    ],
                    styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.ngx-bad-phone-spinner .wrapper{border-top:1px solid rgba(0,0,0,.12);float:left;max-width:50px;padding:1px}.ngx-bad-phone-spinner .wrapper button{padding:.5rem;overflow:hidden;border:0}.ngx-bad-phone-spinner .wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.ngx-bad-phone-spinner .wrapper button:focus{outline:0}.ngx-bad-phone-spinner .wrapper button:disabled{cursor:not-allowed}.ngx-bad-phone-spinner .wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.ngx-bad-phone-spinner .wrapper div{align-items:center;border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem;font-size:1rem;flex:1;min-width:30px;text-align:center;vertical-align:unset}.ngx-bad-phone-spinner .inline-label{float:left;padding-top:0;padding-left:5px;padding-right:5px;font-size:2em}.ngx-bad-phone-spinner .ripple{background-position:center;transition:background .3s}.ngx-bad-phone-spinner .ripple:hover{cursor:pointer;background:radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 1%) center/15000% rgba(0,0,0,.12)}.ngx-bad-phone-spinner .ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background}.ngx-bad-phone-spinner .randomize-button{width:50px;border-radius:9px;margin-left:10px;height:37px}"]
                }] }
    ];
    /** @nocollapse */
    NgxBadPhoneSpinnerComponent.ctorParameters = function () { return []; };
    NgxBadPhoneSpinnerComponent.propDecorators = {
        change: [{ type: Output, args: ['change',] }],
        number: [{ type: Input, args: ['number',] }]
    };
    return NgxBadPhoneSpinnerComponent;
}());
export { NgxBadPhoneSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1iYWQtcGhvbmUtc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYmFkLXBob25lLXNwaW5uZXIvbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RTtJQW1DRTtRQXBCa0IsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBV3BFLGVBQVUsR0FBVyxZQUFZLENBQUM7UUFDbEMsV0FBTSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsVUFBSyxHQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFJMUYscUJBQWdCOzs7UUFBTyxjQUFPLENBQUMsRUFBQztJQUdoQixDQUFDO0lBbEJqQixzQkFDSSwrQ0FBTTs7Ozs7UUFEVixVQUNXLE1BQWM7O2dCQUNqQixVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RjtRQUNILENBQUM7OztPQUFBOzs7OztJQWFELGdEQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxJQUFJLFlBQVksQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELHNEQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELHNEQUFnQjs7OztJQUFoQixVQUFrQixVQUFtQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdEQUFVOzs7O0lBQVYsVUFBVyxDQUFRO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsK0NBQVM7OztJQUFUO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLCtDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBM0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUcsdUJBQXVCO29CQUNsQyx5allBQXFEO29CQUlyRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCLEVBQUM7NEJBQzFELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOztpQkFDRjs7Ozs7eUJBRUUsTUFBTSxTQUFDLFFBQVE7eUJBRWYsS0FBSyxTQUFDLFFBQVE7O0lBMkRqQixrQ0FBQztDQUFBLEFBNUVELElBNEVDO1NBOURZLDJCQUEyQjs7O0lBQ3RDLDZDQUFvRTs7SUFXcEUsaURBQWtDOztJQUNsQyw2Q0FBa0Q7O0lBQ2xELDRDQUEwRjs7SUFFMUYsK0NBQWtCOztJQUVsQix1REFBZ0M7O0lBQ2hDLGlEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogICduZ3gtYmFkLXBob25lLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4vbmd4LWJhZC1waG9uZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5neEJhZFBob25lU3Bpbm5lckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hCYWRQaG9uZVNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdudW1iZXInKVxuICBzZXQgbnVtYmVyKGRpZ2l0czogc3RyaW5nKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IGRpZ2l0cy5zcGxpdCgnJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuZGlnaXRzW2ldID0gdHlwZW9mIGNhbmRpZGF0ZXNbaV0gIT09ICd1bmRlZmluZWQnID8gcGFyc2VJbnQoY2FuZGlkYXRlc1tpXSwgMTApIDogMDtcbiAgICB9XG4gIH1cblxuICBmdWxsTnVtYmVyOiBzdHJpbmcgPSAnMDAwMDAwMDAwMCc7XG4gIGRpZ2l0czogbnVtYmVyW10gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIGxvY2tzOiBib29sZWFuW10gPSBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdO1xuXG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIF9wcm9wYWdhdGVDaGFuZ2U6YW55ID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZ1bGxOdW1iZXIgPSB2YWx1ZSB8fCAnMDAwMDAwMDAwMCc7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHRvZ2dsZUxvY2soaTpudW1iZXIpOnZvaWQge1xuICAgIHRoaXMubG9ja3NbaV0gPSAhdGhpcy5sb2Nrc1tpXTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICByYW5kb21pemUoKTp2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmxvY2tzW2ldID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmRpZ2l0c1tpXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6dm9pZCB7XG4gICAgdGhpcy5mdWxsTnVtYmVyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmZ1bGxOdW1iZXIgKz0gJycgKyB0aGlzLmRpZ2l0c1tpXTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UodGhpcy5mdWxsTnVtYmVyKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZnVsbE51bWJlcik7XG4gIH1cbn1cbiJdfQ==