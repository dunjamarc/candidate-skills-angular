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

  updateSkill() {
    this.skillService.updateSkill(this.skillId, this.skillBody).subscribe(() => {
      this.getSkills();
      this.clearForm();
    });
  }

  createSkill() {
    this.skillService.addSkill(this.skillBody).subscribe(() => {
      this.getSkills();
      this.clearForm();
    });
  }

  editSkill(skill: Skill): void {
    this.changeSkill = 'Edit';

    this.skillId = skill.id;
    this.skillName = skill.name;
    this.skillYear = skill.year;
    this.skillRating = skill.rating;
  }

  updateSkillProp(event: any) {
    if (event.target.id === 'skill-name') {
      this.skillName = event.target.value;
    } else if (event.target.id === 'skill-rating') {
      this.skillRating = event.target.value;
    } else {
      this.skillYear = event.target.value;
    }
  }

  clearForm() {
    this.skillId = null;
    this.skillName = '';
    this.skillYear = null;
    this.skillRating = 1;
    this.changeSkill = 'Add';
  }

  handleClick() {
    let newSkillId;
    newSkillId = this.changeSkill === 'Add' ? this.skills.length : this.skillId;
    this.skillBody = {
      id: newSkillId,
      name: this.skillName,
      year: this.skillYear,
      rating: this.skillRating,
    };
    this.changeSkill === 'Add' ? this.createSkill() : this.updateSkill();
  }
}
