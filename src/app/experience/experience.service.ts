import { Injectable } from '@angular/core';
import { experience } from './model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceList:experience[]=[
    new experience("March, 2021","January 2023","Senior Software Engineer","Kaz Software",
    "Dhaka, Bangaladesh"),
    new experience("September 2016","February 2021","Assistant Manager",
    "MISAMI-BITPI Group","Dhaka, Bangladesh"),
    new experience("May 2013","August 2016","Software Engineer","Global Software Architects",
    "Dhaka, Bangladesh")
  ];
    constructor() { 
  
    }
    getExperienceList()
    {
      return this.experienceList.slice();
    }
}
