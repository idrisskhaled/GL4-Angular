import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheServiceService } from 'src/app/services/embauche-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private embauchService : EmbaucheServiceService) { }
  @Input('details') details : any 
  ngOnInit(): void {
  }
  embauch(){
    this.embauchService.Embaush(this.details);
  }

}
