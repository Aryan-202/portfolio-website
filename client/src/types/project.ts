export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  featured: boolean;
  category: string;
}

export interface ProjectsFilter {
  category: string;
  featured: boolean;
}