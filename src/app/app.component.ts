import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private WikipediaServ: WikipediaService) {}
  //constructor(){const wiki = new WikipediaService()} -> [NOT Recommended]
  onTerm(term: string) {
    this.WikipediaServ.search(term).subscribe((response: any) => {
      this.pages = response.query.search; //pass in a callback function, it's going to be called with whatever resp we get from the Wikipedia API.
      console.log(this.pages);
    });
  }
}
