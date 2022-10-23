import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Output('event') event : EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  fireEvent(){
    this.event.emit("Nous sommes deux étudiants en GL4 à l'INSAT en train de faire le tp1 Angular en 23/10/2022 chez monsieur Aymen Sellaouti")
  }

}
