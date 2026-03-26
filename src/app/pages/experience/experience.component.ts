import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Experience } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience = signal<Experience[]>([]);
  constructor(private ps: PortfolioService) {}
  ngOnInit() { this.experience.set(this.ps.getExperience()); }
}
