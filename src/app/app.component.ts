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
      // console.log(response);
      this.pages = response.query.search;
      console.log(this.pages);
      //pass in a callback function, it's going t obe called with whatever resp we get from the Wikipedia API.
    });
    // const results = this.WikipediaServ.search(term);
    // console.log(results);
  }
}
