import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultImagePipe } from 'src/app/utils/pipes/default-image.pipe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private imagePipe : DefaultImagePipe) { }
  @Input('cv') cv : any
  @Input('embauched') embauched : boolean = false
  @Output('event') event : EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    console.log(this.cv)
    console.log(this.imagePipe.transform(this.cv.image))
    this.imgSrc = this.imagePipe.transform(this.cv.image)
  }
  imgSrc : string = ''
  fireEvent(){
    this.event.emit(this.cv)
  }

}
