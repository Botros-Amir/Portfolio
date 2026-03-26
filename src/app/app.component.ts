// import { Component, OnInit } from '@angular/core';
// import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { NavbarComponent } from './shared/components/navbar/navbar.component';
// import { CursorGlowComponent } from './shared/components/cursor-glow/cursor-glow.component';
// import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';
// import { SeoService } from './core/services/seo.service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NavbarComponent, CursorGlowComponent, PageLoaderComponent],
//   template: `
//     <app-cursor-glow />
//     <app-page-loader />
//     <app-navbar />
//     <main>
//       <router-outlet />
//     </main>
//     <footer class="site-footer">
//       <p>Designed & built by <span>Your Name</span> · {{ year }}</p>
//       <p class="footer-stack">Angular 17 · TypeScript · SCSS</p>
//     </footer>
//   `,
//   styles: [`
//     main { min-height: 100vh; position: relative; z-index: 1; }
//     .site-footer {
//       border-top: 0.5px solid rgba(255,255,255,0.06);
//       padding: 28px 48px; display: flex;
//       justify-content: space-between; align-items: center;
//     }
//     .site-footer p {
//       font-family: 'DM Mono', monospace; font-size: 11px;
//       color: rgba(232,230,223,0.2); letter-spacing: 0.06em;
//     }
//     .site-footer span { color: #a78bfa; }
//     .footer-stack { font-style: italic; }
//     @media (max-width: 600px) {
//       .site-footer {
//         flex-direction: column; gap: 8px;
//         padding: 20px 24px; text-align: center;
//       }
//     }
//   `]
// })
// export class AppComponent implements OnInit {
//   year = new Date().getFullYear();

//   constructor(private router: Router, private seo: SeoService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(filter(e => e instanceof NavigationEnd))
//       .subscribe((e: any) => {
//         this.seo.setMeta(e.urlAfterRedirects);
//         window.scrollTo({ top: 0, behavior: 'instant' });
//       });
//   }
// }
