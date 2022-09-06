# AngularWsearchServices

Small Angular app to use services topic.

- components can connect with REST API to fetch data (need to use ‘subscribe’), but this approach is not scalable and not recommended
- components should focus only on presenting data and delegate fetching data to a service
- data flows from a service to a component
- services are implemented as classes
- angular will automatically create a single instance of each service for us
- used to store/fetch/update any kind of data in our app
- almost always where we are going to put network requests
- services are a great way to share information among classes that don't know each other (any to any component communication): create the service and inject it in the places (components) that need it.
- the serviceservice imports and uses the @Injectable() decorator. This marks the class as being able to be app-wide injectable (can be used by any other component).
- Generate service command: ng g service nameService (ng g service wikipedia) - it creates 2 files (.wikipedia.service.ts, wikipedia.service..spec.ts); it adds automatically 'service'to the name.

# Child to parent communication / custom event binding

*in the child.comp.ts create the event using @Output decorator and EventEmitter (both imported from @angular/core)
@Output() submitted = new EventEmitter<string>()
*also in the child.comp.ts create the handler function that will trigger/raise the event and pass the value that want to send to the parent; the func is called from the chil.comp.html via an event (click, eg)

<form (submit)="onFormSubmit($event)"> //child.comp.htm;
onFormSubmit(event: any) {this.submitted.emit(this.term); } //child.comp.ts
*in the parent.comp.html bind the created custom event to the child selector
<app-search-bar (submitted)="onTerm($event)"></app-search-bar>
*in the parent.comp.ts define the handler function onTerm 
onTerm(term: string) {console.log('term:', term);}
- Request to : https://www.mediawiki.org/wiki/API:Search (no key needed)

# Make http requests:

*import in app.modules.ts HttpClientModule from '@angular/common/http' and add it to imports array
*import HttpClient from '@angular/common/http' in the service class that is making the request in order to use it.

# CSS gotcha

when a template file is using an embedded element with style applied, can't apply the styling into that comp.css because it won't work; write the styling globally, into styles.css. (the element that is using the css class is used in page-list.comp.html, but not directly, it's embedded eith (ngFor; because of that can't apply style in page-list-comp.css because the span elem with the class is not directly written in the template file).

# App security in Angular

- <td>{{page.snippet}} </td> returns <span> element embedded => as general rule: we only want to display HTML element that we have created, if the API returns html element, Angular escapes it, it doesn't insert it into DOM, and marks it as untrusted (it prints <span> as plain text). If it's safe, mark it as trusted (sanitazation) using <td [innerHTML]="page.snippet"></td>

# Cross-site scripting (XSS)

enables attackers to inject malicious code into web pages(steal login data).To block XSS attacks, you must prevent malicious code from entering the DOM. (<script>, <img onerror="...">,
<a href="javascript:...">. If attacker-controlled data enters the DOM, expect security vulnerabilities).

# Angular's cross-site scripting security model

To block XSS bugs, Angular treats all values as untrusted by default. When a value is inserted into the DOM from a template binding, or interpolation, Angular sanitizes and escapes untrusted values.
eg: {{ page.snippet }} - this interpolation returnsaan HTML element <span>, and to prevent the browser to insert the outside created HTML elem into DOM (comes as response from http request), Angular prints it as plain text => to solve it and use it as html elem, you need to mark it as safe/trusted data, sanitize it.
Sanitization is the inspection of an untrusted value, turning it into a value that's safe to insert into the DOM (<td [innerHTML]="page.snippet"></td>)
Important: Angular templates (.html) are considered trusted by default, and should be treated as executable code. Never generate templates by concatenating user input and template syntax.
More: https://angular.io/guide/security
