import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {} //dependency injection
  // HttpClient is a class, we need to create an instance in order to make a request

  search(term: string) {
    return this.http.get(' https://en.wikipedia.org//w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}
