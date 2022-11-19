import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvServiceService } from 'src/app/services/cv-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor(private cvService : CvServiceService) { }

  @Output('event') event : EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.cvs = this.cvService.getCvs()
  }
  cvs : any = []
  fireEvent(event :any){
    this.event.emit(event)
  }

}
