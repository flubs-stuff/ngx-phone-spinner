# ngx-bad-phone-spinner

[![npm](https://img.shields.io/npm/l/ngx-bad-phone-spinner.svg)](https://www.npmjs.com/package/ngx-bad-phone-spinner/)
[![npm](https://img.shields.io/npm/dt/ngx-bad-phone-spinner.svg)](https://www.npmjs.com/package/ngx-bad-phone-spinner)
[![npm](https://img.shields.io/npm/dm/ngx-bad-phone-spinner.svg)](https://www.npmjs.com/package/ngx-bad-phone-spinner)

![](src/assets/images/example.gif)

## Index ##

* [About](#about)
* [Setup](#setup)
* [Documentation](#documentation)
* [Issues](#issues)
* [Contributing](#contributing)

## About ## 

This is a bad phone number picker for Angular 2+. 

* Try out [the demo](https://ngx-bad-phone-spinner.jrquick.com) to see it in action!
* Checkout my other Ionic/Angular projects: [ionic4-tooltips](https://github.com/jrquick17/ionic4-tooltips) and [ionic4-auto-complete](https://github.com/jrquick17/ionic4-auto-complete)!
* Visit [my website](https://jrquick.com) for other cool projects!

## Setup ##

To install this library (component), run:
```bash
$ npm i ngx-bad-phone-spinner --save
```

## Documentation ##
Add NumberPickerModule to `AppModule`

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

```html
<ngx-bad-phone-spinner
    [number]="mobile"
    (change)="change($event)">
</ngx-bad-phone-spinner>
```

--------------------------------------------------------------------------------------------
### Component Inputs and Outputs
| Attribute        | Type           | Required  | Default | Description |
| :------------- |:-------------| :-----:| :----| :-----|
| number | [input] string | No | 0000000000 | initial value for the spinner |
| (change) | (output) number | no | - | emits the value of the current number, every time the user clicks the - or + button |


-------------------------------------------------------------------------------------------------------

## Issues ##

If you find any issues feel free to open a request in [the Issues tab](https://github.com/jrquick17/ngx-bad-phone-spinner/issues). If I have the time I will try to solve any issues but cannot make any guarantees. Feel free to contribute yourself.

### Demo ###

Run `npm install` to get packages required for the demo and then run `ionic serve` to run locally.

### Thanks ###

* [mandhu](https://github.com/mandhu)
* [jrquick17](https://github.com/jrquick17)
