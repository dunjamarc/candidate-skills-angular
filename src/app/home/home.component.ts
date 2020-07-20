import { Component, OnInit } from '@angular/core';
import { SkillService } from '@app/services/skill.service';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { Skill } from '@app/@core/model/skill';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  skills: Skill[];
  skillsPerYear: any = [1];
  chartYears: any = [];

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills().subscribe((skills) => {
      this.skills = skills;
      this.chartData();
    });
  }

  chartData = () => {
    let years: any = [];
    Object.values(this.skills).forEach((skill: any) => years.push(skill.year.toString()));
    years.sort();
    this.chartYears.push(years[0]);

    for (let i = 1; i < years.length; i++) {
      if (years[i] === years[i - 1]) {
        this.skillsPerYear[this.skillsPerYear.length - 1]++;
      } else {
        let lastSkillNo = this.skillsPerYear[this.skillsPerYear.length - 1];
        this.chartYears.push(years[i]);
        this.skillsPerYear.push(lastSkillNo + 1);
      }
    }
  };

  public lineChartData: ChartDataSets[] = [{ data: this.skillsPerYear, label: 'Number of skills through years' }];
  public lineChartLabels: Label[] = this.chartYears;
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#283143',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins: any = [];
}
