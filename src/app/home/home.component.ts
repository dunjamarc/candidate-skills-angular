import { Component, OnInit } from '@angular/core';
import { SkillService } from '@app/services/skill.service';

import { Skill } from '@app/@core/model/skill';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  skills: Skill[];

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => (this.skills = skills));
  }
}
