export type Language = 'es' | 'en';
export type Theme = 'dark' | 'light';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  year: string;
  featured?: boolean;
  front: {
    badge: string;
    description: string;
    highlights: string[];
    visualType: 'synth' | 'terminal' | 'fretboard';
  };
  back: {
    specsTitle: string;
    descriptionDetailed: string;
    architectureTitle: string;
    architectureNotes: string[];
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
    audioPreviewAvailable?: boolean;
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  items: {
    name: string;
    level: string;
    tag: string;
    details: string;
  }[];
}
