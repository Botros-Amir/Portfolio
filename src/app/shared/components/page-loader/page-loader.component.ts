import { Component, OnInit, signal } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css']
})
export class PageLoaderComponent implements OnInit {
  loading = signal(false);
  done = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.done.set(false);
        this.loading.set(true);
      }
      if (event instanceof NavigationEnd) {
        this.loading.set(false);
        this.done.set(true);
        setTimeout(() => this.done.set(false), 600);
      }
    });
  }
}
