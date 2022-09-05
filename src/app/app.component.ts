import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private WikipediaServ: WikipediaService) {}
  //constructor(){const wiki = new WikipediaService()} -> [NOT Recommended]
  onTerm(term: string) {
    this.WikipediaServ.search(term).subscribe((response) => {
      console.log(response);
      //pass in a callback function, it's going t obe called with whatever resp we get from the Wikipedia API.
    });
    // const results = this.WikipediaServ.search(term);
    // console.log(results);
  }
}
