import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProjects = signal<any[]>([]);

  techStack = [
    'Angular', '·', 'TypeScript', '·', 'RxJS', '·', 'Node.js', '·',
    'PostgreSQL', '·', 'MongoDB', '·', 'Docker', '·', 'REST APIs', '·',
    'Git', '·', 'Firebase', '·', 'SCSS', '·', 'Jest', '·',
  ];

  ngOnInit() {
    this.featuredProjects.set([
      {
        category: 'Web App', title: 'E-Commerce Platform',
        description: 'Full-stack store with Angular front-end, Node.js API, real-time inventory and Stripe payments.',
        tags: ['Angular', 'Node.js', 'MongoDB'],
      },
      {
        category: 'Dashboard', title: 'Analytics Dashboard',
        description: 'Real-time data visualization with D3.js charts, WebSocket feeds and role-based access control.',
        tags: ['Angular', 'D3.js', 'RxJS'],
      },
      {
        category: 'SaaS', title: 'Task Management SaaS',
        description: 'Collaborative project tool with drag-and-drop boards, notifications and team workspaces.',
        tags: ['Angular', 'Firebase', 'TypeScript'],
      },
    ]);
  }
}
