import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    longDescription: 'A complete e-commerce platform featuring user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/johndoe/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    category: ['fullstack', 'ecommerce']
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application',
    longDescription: 'A Trello-like application for team collaboration with real-time updates and drag-and-drop functionality.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com/johndoe/taskapp',
    liveUrl: 'https://taskapp-demo.com',
    featured: true,
    category: ['frontend', 'collaboration']
  }
]