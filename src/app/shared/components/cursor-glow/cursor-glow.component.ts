import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-glow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor-glow.component.html',
  styleUrls: ['./cursor-glow.component.css']
})
export class CursorGlowComponent {
  x = signal(0);
  y = signal(0);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.x.set(e.clientX);
    this.y.set(e.clientY);
  }
}
