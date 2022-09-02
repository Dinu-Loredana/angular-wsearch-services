import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term = '';
  @Output() submitted = new EventEmitter<string>(); //emit the event and save it as 'submitted' name
  constructor() {}

  ngOnInit(): void {}
  onInput(event: any) {
    this.term += event.data;
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
