import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  constructor() { }
  cvs = [{
    firstName : "idriss",
    lastName : "khaled",
    age : 22,
    title : "student",
    followers : 23,
    following : 15,
    projects : 3,
    image : "idriss.jpg"
  },
  {
    firstName : "fares",
    lastName : "garrach",
    age : 41,
    title : "engineer",
    followers : 200,
    following : 50,
    projects : 15,
    image : ""
  },
  {
    firstName : "mostafa",
    lastName : "mohamed",
    age : 35,
    title : "professor",
    followers : 160,
    following : 320,
    projects : 5,
    image : ""
  }]
  getCvs(){
    return this.cvs
  }
}
