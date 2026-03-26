import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = signal<Skill[]>([]);

  skillGroups = [
    { label: '// frontend', cat: 'frontend' as const },
    { label: '// backend & databases', cat: 'backend' as const },
    { label: '// tools & workflow', cat: 'tools' as const },
  ];

  constructor(private ps: PortfolioService) {}
  ngOnInit() { this.skills.set(this.ps.getSkills()); }

  getByCategory(cat: Skill['category']) {
    return this.skills().filter(s => s.category === cat);
  }
}
