export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tool' | 'language'
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured: boolean
}