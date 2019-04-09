# ng-getmdl-select
Angular select for [material-design-lite](https://github.com/google/material-design-lite)

## Live example

![Live example](https://raw.githubusercontent.com/CreativeIT/material-angular-dashboard/ng-select/projects/ng-getmdl-select/src/assets/live_example.gif)

## Getting started
### Step 1: Install `ng-getmdl-select`:
##### NPM
```shell
npm install --save ng-getmdl-select
```
or
##### YARN
```shell
yarn add ng-getmdl-select
```
### Step 2: Import the NgGetmdlSelectModule
```typescript
import { NgGetmdlSelectModule } from 'ng-getmdl-select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgGetmdlSelectModule,  // add the module in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Step 3 (Optional): Include MDL
If you don't use [material-design-lite](https://github.com/google/material-design-lite) in your project before, don't forget include needed sources.
Follow to step from [here](https://getmdl.io/started/index.html)
or
- add dependencies in `angular.json`
```json
...
  "build": {
    "options": {
      "styles": [
        "node_modules/material-design-lite/src/material-design-lite.scss"
      ],
      "scripts": [
        "node_modules/material-design-lite/material.js"
      ]
...
```
- and import icons in `index.html`
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```


## Sample implementation

**```app.module.ts```**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgGetmdlSelectModule } from 'angular-ratify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGetmdlSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**```app.component.html```**

```html
 <ng-getmdl-select [data]="countries"
                   [label]="'Location'"
                   [name]="'country'"
                   [currentValue]="locationValue"
                   (selectedValue)="changeCountry($event)"></ng-getmdl-select>
```

**```app.component.ts```**

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
  public locationValue = 'Minsk';
  
  public changeCountry(country) {
    // do something
  }
}

```

## API

### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [data] | Array<any>	[] | [] |	yes |	Items array |
| name | string | '' | yes | Text for name of input |
| label | string | '' | no | Text for label |
| arrow | boolean | true | no | Allows to hide arrow |
| disabled | boolean | false | no | Allows to disable select |
| fixHeight | boolean | false | no | Allows to fix menu height to 280px |
| isFloatingLabel | boolean | true | no | Allows to fix label |
| [classStyle] | Array<string> | null | no | Added own classes to dropdown element  |
| keys | {value: string, title: string} | {value: 'value', title: 'title'} | yes | Required if use array of object with different structure |
| currentValue | string or {title: any, value: any} | {title: '', value: ''} | no | Set default value |

### Outputs
| Output | Description |
| ------ | ------ |
| selectedValue | Fired on model change. Outputs whole model |



## Hire us
We are ready to bring value to your business. Visit our site [creativeit.io](http://creativeit.io/) or drop us a line <hello@creativeit.io>. We will be happy to help you!

## Support the project
* Star the repo
* Create issue report or feature request
* [Tweet about it](https://twitter.com/CreativeITeam)
* Follow us on [Twitter](https://twitter.com/CreativeITeam)

