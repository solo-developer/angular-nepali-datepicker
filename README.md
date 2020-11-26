# Angular Nepali Date Picker

This is the angular 8 nepali date picker project, custom built for nepali date picking functionality with real data till 2090 BS.

## Usage:

Use the datepicker component as following in your desired angular component.

```html
<nepali-datepicker 
  [value]='field.value' 
  (callback)="update($event)">
</nepali-datepicker>
```

## Running this demo app in your local machine:

1. Clone this repo:
   - `git clone https://github.com/solo-developer/angular-nepali-datepicker.git`

2. Go to `angular-nepali-datepicker` directory:
   - `cd angular-nepali-datepicker`

3. Install the dependencies:
   - `npm install`

## Development server

- Run `ng serve` for a dev server. 
- Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Build

- Run `ng build` to build the project. 
- The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About Repo

This repo is forked from https://github.com/bmnepali/angular-nepali-datepicker and credit to Buddha Man Nepali. 

## Changes
1. Upgraded angular version from 5 to 8.
2. Used real datas instead of mock ones.
3. Minor bug fixes and css customisations.
4. Code unrelated to datepicker removed
