# ng-getmdl-select
Angular select for [material-design-lite](https://github.com/google/material-design-lite)

## Installation
To install this module to an external project, follow the procedure:
1. `npm i ng-getmdl-select`
2. Add `NgGetmdlSelectModule` import module to your @NgModule like example below:
```javascript
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
3. If you don't use [material-design-lite](https://github.com/google/material-design-lite) in your project before, don't forget include needed sources.
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
- import icons in `index.html`
```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```


## How to use?


## Hire us
We are ready to bring value to your business. Visit our site [creativeit.io](http://creativeit.io/) or drop us a line <hello@creativeit.io>. We will be happy to help you!

## Support the project
* Star the repo
* Create issue report or feature request
* [Tweet about it](https://twitter.com/CreativeITeam)
* Follow us on [Twitter](https://twitter.com/CreativeITeam)

