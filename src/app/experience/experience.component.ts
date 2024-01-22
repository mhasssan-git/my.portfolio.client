import { Component } from '@angular/core';
import { ExperienceService } from './experience.service';
import { experience } from './model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor(private experienceService:ExperienceService) {
    
  }
  getEducationList():experience[]
  {
    return this.experienceService.getExperienceList();
  }

}
