import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

  constructor() { }
  @Input('color') color :string =""
  @Output() event : EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  changeParent(){
    this.event.emit('yellow')
  }
}


