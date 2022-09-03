import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private WikipediaServ: WikipediaService) {}

  onTerm(term: string) {
    // console.log('term:', term);
    const wikiTerms = this.WikipediaServ.search(term);
    console.log(wikiTerms);
  }
}
