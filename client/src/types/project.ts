import { BaseEntity } from './common';

export interface Project extends BaseEntity {
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate?: string;
  endDate?: string;
  challenges?: string[];
  solutions?: string[];
  keyFeatures?: string[];
  learnings?: string[];
}

export interface ProjectFilters {
  category?: string;
  status?: string;
  featured?: boolean;
  technologies?: string[];
  search?: string;
}

export interface ProjectStats {
  total: number;
  completed: number;
  inProgress: number;
  planned: number;
  byCategory: Record<string, number>;
  byTechnology: Record<string, number>;
}

export interface ProjectFormData {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}