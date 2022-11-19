import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {

  constructor(private toastr : ToastrService) { }
  embauchedCvs : any[] = []

  getEmbauched(){
    return this.embauchedCvs
  }

  Embaush(cv:any){
    if(!this.embauchedCvs.includes(cv))
    {this.embauchedCvs.push(cv);
      this.toastr.success('User embaushed !', 'Notification')
    }else{
      this.toastr.error('User already embaushed !', 'Notification')
    }
  }
}
