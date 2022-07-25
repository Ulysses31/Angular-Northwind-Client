# Corelib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## Code scaffolding

Run `ng generate component component-name --project corelib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project corelib`.
> Note: Don't forget to add `--project corelib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build corelib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build corelib`, go to the dist folder `cd dist/corelib` and run `npm publish`.

## Running unit tests

Run `ng test corelib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

ng new my-workspace --no-create-application
cd my-workspace
ng generate library my-lib
ng g application testapp --style css --no-routing

npm -i --save "file:./dist/corelib"

ng g c controls/ng-calendar --module corelib --skip-tests --style css --inline-template

ng g m features/posts --module app --routing --route posts --dry-run

npm i -D @angular-devkit/build-angular @angular/cli @angular/compiler-cli @types/jasmine @types/node jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter ng-packagr typescript

npm i @angular/animations @angular/common @angular/compiler @angular/core @angular/forms @angular/platform-browser @angular/platform-browser-dynamic @angular/router rxjs tslib zone.js 

sudo npm i --save @angular/cdk @angular/common @angular/core @angular/material tslib
