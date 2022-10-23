import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  constructor() { }
  divColor : string = "grey"
  ngOnInit(): void {
  }
  changeColor(event : any){
   this.divColor = (event.target as HTMLTextAreaElement).value
  }
}
