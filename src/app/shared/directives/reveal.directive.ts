import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  @Input() revealDelay = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${this.revealDelay}ms, transform 0.6s ease ${this.revealDelay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  }
}
