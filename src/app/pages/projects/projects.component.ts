import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectsComponent implements OnInit {
  categories = ['All', 'Web App', 'Industrial Software', 'Physical Machine', 'Games'];
  activeFilter = signal('All');
  allProjects = signal<Project[]>([]);

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'All' ? this.allProjects() : this.allProjects().filter(p => p.category === f);
  });

  constructor(private ps: PortfolioService) {}

  ngOnInit() {
    this.allProjects.set(this.ps.getProjects());
  }
}
