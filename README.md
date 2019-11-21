# ngx-bad-phone-spinner

This is an angular number spinner component.

## Installation

To install this library (component), run:
```bash
$ npm i ngx-bad-phone-spinner --save
```

## Usage
add NumberPickerModule to `AppModule`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import this library
import { NgxBadPhoneSpinnerModule } from 'ngx-bad-phone-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Specify this library as an import
    NgxBadPhoneSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use this component in your Angular application:
### Standalone Examples

```typescript
export class AppComponent {
    change(value: number): void {
        console.log(value);
    }
}
```

##### With validation 'MIN' value (min=1)
```html
<ngx-bad-phone-spinner
    [digits]="4"
    (change)="change($event)" 
    [min]="1">
</ngx-bad-phone-spinner>
```

##### With validation 'MAX' value (min=9)
```html
<ngx-bad-phone-spinner 
    [digits]="4"
    (change)="change($event)" 
    [max]="9">
</ngx-bad-phone-spinner>
```

##### With validation 'MIN' and 'MAX' value (min=1, max=9)
```html
<ngx-bad-phone-spinner 
    [digits]="4"
    (change)="change($event)"
    [min]="1"
    [max]="9">
</ngx-bad-phone-spinner>
```

##### With 'STEP' (step=5)
```html
<ngx-bad-phone-spinner
    (change)="change($event)" 
    [step]="5">
</ngx-bad-phone-spinner>
```
--------------------------------------------------------------------------------------------------------------------
### Form Example
```typescript
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
    form: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            price: 11
        });
    }
       
    submit() {
        alert(JSON.stringify(this.form.value));
    }
}
```

```html
<form [formGroup]="form" (submit)="submit()">

    <ngx-bad-phone-spinner formControlName="price" [min]="1" [max]="9"></ngx-bad-phone-spinner>
    
    <button type="submit">submit</button>
    
</form>

```
--------------------------------------------------------------------------------------------
### Component Inputs and Outputs
| Attribute        | Type           | Required  | Default | Description |
| :------------- |:-------------| :-----:| :----| :-----|
| value | [input] number | No | 0 | initial value for the spinner |
| min | [input] number | No | null | limit the minimal number |
| max | [input] number | No | null | limit the maximum number |
| spin | [input] number | No | 1 | increment or decrement by current number  |
| vertical | [input] vertical|horizontal | No | horizontal | change the direction of the buttons |
| (change) | (output) number | no | - | emits the value of the current number, every time the user clicks the - or + button |


-------------------------------------------------------------------------------------------------------

![ngx-bad-phone-spinner example image](/src/assets/images/example.png "ngx-bad-phone-spinner example image")

