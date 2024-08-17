import { Injectable } from '@angular/core';
import { experience } from './model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceList:experience[]=[
    new experience("February, 2024","Present","Senior Software Engineer at HP Inc","Kforce Inc",
    "Texas, USA","•	Developing desktop-based application using C#.NET based on interfacing user query with LLM such as local RAG pipeline using vector database or external GPT."+
    "•	Design and implement scalable software solutions"),
    new experience("February, 2023","January 2024","Professional development, Career Break","Maharishi International University",
    "Iowa, USA","● Algorithm ● Advanced Software Development● Enterprise Architecture● Web Application Programming"
    +"● Cloud Computing"
    +"● Modern Programming Practice"
    +"● Leadership for Technical Manager"),
    new experience("March, 2021","January 2023","Senior Software Engineer/Team Lead","Kaz Software",
    "Dhaka, Bangaladesh","Analyzed, designed and developed a project framework from a legacy Java monolith application into an ASP.NET application using microservices architecture."+
    " Updated, modified, and expanded existing web applications using C#, ASP.NET MVC, and Azure DevOps."+
    " Planned sprints and conducted day-to-day scrum meetings as a scrum master."),
    new experience("October 2019","February 2021","Assistant Manager",
    "MISAMI-BITPI Group","Dhaka, Bangladesh","Enhanced, and modified existing enterprise level web and desktop-based applications using C#, ASP.NET Core, and ASP.NET MVC."+
    " Wrote stored procedures, user define functions, views, triggers, and complex SQL Queries in SQL Server"),
    new experience("October 2017","September 2019","Senior Programmer",
    "MISAMI-BITPI Group","Dhaka, Bangladesh"),
    new experience("September 2016","September 2017","Programmer",
    "MISAMI-BITPI Group","Dhaka, Bangladesh"),
    new experience("May 2013","August 2016","Software Engineer","Global Software Architects",
    "Dhaka, Bangladesh","Wrote server-side code using ASP.NET MVC and ASP.NET Web Forms."+
    " Wrote store procedures and triggers using MS SQL Server."+
    " Worked intensely on the front-end using jQuery, bootstrap, and the Google Maps API."+
    " Developed and maintained mobile applications using Xamarin for Android and iOS.")
  ];
    constructor() { 
  
    }
    getExperienceList()
    {
      return this.experienceList.slice();
    }
}
