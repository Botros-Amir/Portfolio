export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  year: number;
  link?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'expert' | 'proficient' | 'familiar';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
