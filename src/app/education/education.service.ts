import { Injectable } from '@angular/core';
import { education } from './model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
educationList:education[]=[
  new education(2023,2025,"Masters","Computer Science",
  "Maharishi International University","Fairfield, Iowa, USA","In progress via distance education; expected completion 10/2025"),
  new education(2019,2010,"Masters","Computer Science",
  "Jahangirnagar University","Savar, Bangladesh",""),
  new education(2007,2008,"MS","Chemistry",
  "Shahjalal University of Science and Technology","Sylhet, Bangladesh","")
  ,
  new education(2003,2007,"B.Sc","Chemistry",
  "Shahjalal University of Science and Technology","Sylhet, Bangladesh","")
];
  constructor() { 

  }
  getEducations()
  {
    return this.educationList.slice();
  }
}
