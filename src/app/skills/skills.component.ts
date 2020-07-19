import { Component, OnInit } from '@angular/core';
import { SkillService } from '@app/services/skill.service';

import { Skill } from '@app/@core/model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  changeSkill: string;
  skillId: number;
  skillName: string = '';
  skillYear: number;
  skillRating: number;
  rates: any = Array.from(Array(10)).map((e, i) => i + 1);
  skillBody: Skill;

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.getSkills();
    this.changeSkill = 'Add';
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => (this.skills = skills));
  }

  deleteSkill(id: number): void {
    this.skillService.deleteSkill(id).subscribe(() => this.getSkills());
  }

  editSkill(skill: Skill): void {
    this.changeSkill = 'Edit';

    this.skillId = skill.id;
    this.skillName = skill.name;
    this.skillYear = skill.year;
    this.skillRating = skill.rating;
  }

  updateSkill() {
    this.skillBody = {
      id: this.skillId,
      name: this.skillName,
      year: this.skillYear,
      rating: this.skillRating,
    };
    this.skillService.updateSkill(this.skillId, this.skillBody).subscribe(() => {
      this.getSkills();
      this.skillId = null;
      this.skillName = '';
      this.skillYear = null;
      this.skillRating = 1;
      this.changeSkill = 'Add';
    });
  }

  updateSkillName(event: any) {
    this.skillName = event.target.value;
  }

  updateSkillYear(event: any) {
    this.skillYear = event.target.value;
  }

  updateSkillRating(event: any) {
    this.skillRating = event.target.value;
  }
}
