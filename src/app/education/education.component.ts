import { Component } from '@angular/core';
import { EducationService } from './education.service';
import { education } from './model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  /**
   *
   */
  constructor(private educationService:EducationService) {
    
  }
  getEducationList():education[]
  {
    return this.educationService.getEducations();
  }
}
