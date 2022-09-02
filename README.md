# AngularWsearchServices

Small Angular app to use services topic.

- Generate service command: ng g service nameService (ng g service wikipedia) - it creates 2 files (.wikipedia.service.ts, wikipedia.service..spec.ts); it adds automatically 'service'to the name.
- Child to parent communication / custom event binding
*in the child.comp.ts create the event using @Output decorator and EventEmitter (both imported from @angular/core)
@Output() submitted = new EventEmitter<string>()
*also in the child.comp.ts create the handler function that will trigger/raise the event and pass the value that want to send to the parent; the func is called from the chil.comp.html via an event (click, eg)
<form (submit)="onFormSubmit($event)"> //child.comp.htm;
onFormSubmit(event: any) {this.submitted.emit(this.term); } //child.comp.ts
    *in the parent.comp.html bind the created custom event to the child selector
<app-search-bar (submitted)="onTerm($event)"></app-search-bar>
    *in the parent.comp.ts define the handler function onTerm    
 onTerm(term: string) {console.log('term:', term);}

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
