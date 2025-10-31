import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
    image: '/images/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project-1',
    featured: true,
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: '/images/project-2.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/username/project-2',
    featured: true,
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts',
    image: '/images/project-3.jpg',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vuex'],
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/username/project-3',
    featured: false,
    category: 'Frontend'
  }
];