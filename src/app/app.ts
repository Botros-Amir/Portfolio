import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { PageLoaderComponent } from "./shared/components/page-loader/page-loader.component";
import { CursorGlowComponent } from "./shared/components/cursor-glow/cursor-glow.component";
import { SeoService } from './core/services/seo.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PageLoaderComponent, CursorGlowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BotrosPortafoglio');
  year = new Date().getFullYear();
  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.seo.setMeta(e.urlAfterRedirects);
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
  }
}
