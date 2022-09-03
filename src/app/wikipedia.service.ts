import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  search(term: String) {
    return ` am the service that returns this: ${term}`;
  }
}
