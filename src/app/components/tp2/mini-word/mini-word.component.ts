import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.scss']
})
export class MiniWordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fonts : string[] = ['Arial','Courier','sans-serif','monospace','Courier','Tahoma','Geneva','Verdana']
  font : string ='';
  size : number = 15;
  color : string = 'black'

  changeFont(event : any){
    this.font = event.target.value
  }
  changeColor(event : any){
    this.color = event.target.value
  }
  changeSize(event : any){
    this.size = event.target.value

  }

}
