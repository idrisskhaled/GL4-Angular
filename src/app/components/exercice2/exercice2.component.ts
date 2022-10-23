import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss'],
})
export class Exercice2Component implements OnInit {
  constructor() {}
  imgSrc: string = '';
  ngOnInit(): void {}
  firstname: string = '';
  lastname: string = '';
  job: string = '';
  changeFirstname(event: any) {
    this.firstname = (event.target as HTMLTextAreaElement).value;
  }
  changeLastname(event: any) {
    this.lastname = (event.target as HTMLTextAreaElement).value;
  }
  changeJob(event: any) {
    this.job = (event.target as HTMLTextAreaElement).value;
  }
  changeImg(event: any) {
    this.imgSrc = (event.target as HTMLTextAreaElement).value;
  }
}
