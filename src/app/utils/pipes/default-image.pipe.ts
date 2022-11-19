import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value : string) {
    if(!value.trim().length){
      return '../../assets/default.png'
    }
    return value;
  }

}
