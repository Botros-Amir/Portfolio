import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface PageMeta {
  title: string;
  description: string;
}

const BASE_TITLE = 'Your Name — Software & Web Developer';

const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: BASE_TITLE,
    description: 'Software and web developer specialising in Angular, TypeScript and Node.js.',
  },
  '/about': {
    title: `About — ${BASE_TITLE}`,
    description: 'Learn more about my background, values and approach to development.',
  },
  '/projects': {
    title: `Projects — ${BASE_TITLE}`,
    description: 'A selection of web apps, dashboards and tools I have built.',
  },
  '/skills': {
    title: `Skills — ${BASE_TITLE}`,
    description: 'Frontend, backend and tooling skills I use day to day.',
  },
  '/experience': {
    title: `Experience — ${BASE_TITLE}`,
    description: 'My work history and professional experience as a developer.',
  },
  '/contact': {
    title: `Contact — ${BASE_TITLE}`,
    description: 'Get in touch for freelance work, job opportunities or collaborations.',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMeta(path: string) {
    const m = PAGE_META[path] ?? { title: BASE_TITLE, description: '' };
    this.title.setTitle(m.title);
    this.meta.updateTag({ name: 'description', content: m.description });
    this.meta.updateTag({ property: 'og:title', content: m.title });
    this.meta.updateTag({ property: 'og:description', content: m.description });
  }
}
