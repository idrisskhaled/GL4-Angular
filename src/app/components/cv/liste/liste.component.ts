import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor() { }

  @Output('event') event : EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  fireEvent(event :any){
    this.event.emit(event)
  }

}
