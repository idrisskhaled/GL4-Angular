import { Component, OnInit } from '@angular/core';
import { EmbaucheServiceService } from 'src/app/services/embauche-service.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {

  constructor(private embauchService : EmbaucheServiceService) { }
  cvs : any = []
  ngOnInit(): void {
    this.cvs = this.embauchService.getEmbauched()
  }

}
