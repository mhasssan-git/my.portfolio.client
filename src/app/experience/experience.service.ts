import { Injectable } from '@angular/core';
import { experience } from './model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceList:experience[]=[
    new experience("March, 2021","January 2023","Senior Software Engineer","Kaz Software",
    "Dhaka, Bangaladesh","•	Analyzed, designed and developed a project framework from a legacy Java monolith application into an ASP.NET application using microservices architecture by implementing AWS Serverless architecture. It optimized the application by 30% and reduced the server cost by 25%."+
    "<br>•	Updated, modified, and expanded existing web applications using C#, ASP.NET MVC, and Azure DevOps"+
    "<br>•	Designed and developed a front-end application using React and Angular with typescript, jQuery, JavaScript, and Bootstrap."+
    "<br>•	Planned sprints and conducted day-to-day scrum meetings as a scrum master."+
    "<br>•	Contributed to all phases of the development lifecycle."+
    "<br>•	Updated, modified, and expanded existing web applications using C# and ASP.NET Core"+
    "<br>•	Motivated team members and created an inspiring team environment with an open communication culture."),
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
