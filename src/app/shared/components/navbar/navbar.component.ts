import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  // readonly menuOpen = signal(false);
  // readonly scrolled = signal(false);

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   // Standard logic to update signal on scroll
  //   this.scrolled.set(window.scrollY > 50);
  // }
}
