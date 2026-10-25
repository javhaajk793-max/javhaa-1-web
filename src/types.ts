export interface Project {
  id: string;
  title: string;
  filename: string; // e.g. dream-job.html
  category: string;
  description: string;
  fullDetails: string;
  techStack: string[];
  features: string[];
  iconName: 'briefcase' | 'youtube' | 'gamepad' | 'shield';
  accentColor: string;
  glowColor: string;
}

export interface Hobby {
  id: string;
  title: string;
  icon: string;
  description: string;
  tag: string;
}

export interface Goal {
  id: string;
  year: string;
  title: string;
  description: string;
  status: 'хийгдсэн' | 'явагдаж_байгаа' | 'ирээдүйд';
}

export interface Skill {
  name: string;
  level: number;
  description: string;
  category: 'frontend' | 'deployment' | 'creativity';
}

export interface GuestMessage {
  id: string;
  senderName: string;
  message: string;
  date: string;
  emoji: string;
}

export interface FunFact {
  id: string;
  category: string;
  title: string;
  detail: string;
  emoji: string;
  imageUrl?: string;
}
