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
- Request to : https://www.mediawiki.org/wiki/API:Search (no key needed)
  https://en.wikipedia.org//w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
- To make http requests:
  *import in app.modules.ts HttpClientModule from '@angular/common/http' and add it to imports array
  *import HttpClient from '@angular/common/http' in the service class that is making the request in order to use it.
