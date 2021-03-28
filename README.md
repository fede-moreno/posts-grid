# PostsGrid
Uses [jsonplaceholder API](https://jsonplaceholder.typicode.com/) to fetch 100 posts and render them
all where each post in a separate component and show them as squares, 10 rows x 10 columns
Considering the response of the 100 post request will look like:
```
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident...",
"body": "quia et suscipit\nsuscipi..."
},
```
1. By default, show the post id
1. When clicking on a square: replace the id with the userId
1. When clicking again show the id and so on...
1. Impress us with your design taste
1. Bonus: Shared-state made by RxJS only


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
