import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NgxBadPhoneSpinnerComponent implements ControlValueAccessor {
    change: EventEmitter<string>;
    number: string;
    fullNumber: string;
    digits: number[];
    locks: boolean[];
    disabled: boolean;
    _propagateChange: any;
    _onTouched: () => void;
    constructor();
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    toggleLock(i: number): void;
    randomize(): void;
    private _onChange;
}
