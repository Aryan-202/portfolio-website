
# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful Aceternity UI background with smooth animations and dark/light theme support.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
    
- **Responsive**: Fully responsive design that works on all devices
    
- **Dark/Light Theme**: Toggle between dark and light modes
    
- **Smooth Animations**: CSS animations and transitions for better user experience
    
- **TypeScript**: Fully typed for better development experience
    
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
    
- **Aceternity UI**: Beautiful background effects and components
    
- **React 19**: Latest React features and performance improvements
    

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
    
- **Styling**: Tailwind CSS, CSS Modules
    
- **UI Components**: Shadcn/ui, Aceternity UI, Radix UI
    
- **Icons**: Lucide React
    
- **Build Tool**: Vite
    
- **Routing**: React Router DOM
    
- **Package Manager**: npm
    

## 📁 Project Structure

```text

client/
├── src/
│   ├── components/
│   │   ├── layouts/          # Header, Layout components
│   │   ├── sections/         # Home page sections (Hero, About, Contact)
│   │   ├── ui/               # Reusable UI components (Button, Card, Modal, Footer)
│   │   └── Background.tsx    # Aceternity UI background component
│   ├── pages/                # Page components
│   ├── hooks/                # Custom React hooks
│   ├── data/                 # Static data (personal info, projects, skills)
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── styles/               # Global styles and CSS variables
│   └── lib/                  # Library configurations
├── public/                   # Static assets
└── package.json             # Dependencies and scripts
```

## 🎨 Components Overview

### Layout Components

- **Layout**: Main layout wrapper with background and header
    
- **Header**: Navigation header with theme toggle
    
- **Background**: Aceternity UI animated background
    

### Page Sections

- **Hero**: Introduction section with call-to-action
    
- **About**: Personal information and skills
    
- **Contact**: Contact form and information
    

### UI Components

- **Button**: Customizable button component
    
- **Card**: Content card with various styles
    
- **Modal**: Dialog and modal components
    
- **Footer**: Site footer with links
    

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
    
- npm or yarn package manager
    

### Installation

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/Aryan-202/portfolio-website.git
    cd portfolio-website/client
    ```
    
2. **Install dependencies**
    
    ```bash
    npm install
    ```
    
3. **Start the development server**
    
    ```bash
    npm run dev
    ```
    
4. **Open your browser**  
    Navigate to `http://localhost:5173`
    

### Available Scripts

- `npm run dev` - Start development server
    
- `npm run build` - Build for production
    
- `npm run lint` - Run ESLint
    
- `npm run preview` - Preview production build
    

## 🎯 Customization

### Personal Information

Update your personal details in `src/data/personalInfo.ts`:

```typescript

export const personalInfo = {
  name: "Aryan Vishwakarma",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  // ... other details
}
```
### Projects

Add your projects in `src/data/projects.ts`:

```typescript

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ... other project details
  }
]
```
### Skills

Update your skills in `src/data/skills.ts`:

```typescript

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  }
]
```
## 🌙 Theme System

The portfolio includes a built-in theme system with dark/light mode support:

- **Automatic detection**: Uses system preference by default
    
- **Manual toggle**: Theme toggle button in header
    
- **Persistence**: Theme preference saved in localStorage
    

### Adding New Themes

Extend the theme system by updating:

- `src/hooks/useTheme.ts`
    
- `src/index.css` (CSS variables)
    
- Component styles
    

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: < 768px
    
- Tablet: 768px - 1024px
    
- Desktop: > 1024px
    

## 🎨 Styling Guidelines

- Use Tailwind CSS classes for most styling
    
- CSS Modules for component-specific styles
    
- Global styles in `src/styles/` directory
    
- CSS variables for consistent theming
    

## 🔧 Development

### Adding New Components

1. Create component in appropriate directory
    
2. Export from `index.ts` for clean imports
    
3. Add TypeScript types in `src/types/`
    
4. Use CSS Modules for styling
    

### Code Quality

- ESLint for code linting
    
- TypeScript for type safety
    
- Prettier for code formatting (if configured)
    

## 📦 Building for Production

bash

npm run build

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
    
- **Netlify**: Drag and drop the `dist` folder
    
- **GitHub Pages**: Use GitHub Actions for deployment
    

## 👨‍💻 About Me

I'm Aryan Vishwakarma, a passionate Full Stack Developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.

## 📞 Connect With Me

- **GitHub**: [Aryan-202](https://github.com/Aryan-202)
    
- **LinkedIn**: [Aryan Vishwakarma](https://linkedin.com/in/aryan-vishwakarma-387927321/)
    
- **Portfolio**: [Live Demo](https://your-portfolio-link.com/)
    

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://license/) file for details.

## 🤝 Contributing

1. Fork the project
    
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
    
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
    
4. Push to the branch (`git push origin feature/AmazingFeature`)
    
5. Open a Pull Request
    

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) for beautiful background components
    
- [Shadcn/ui](https://ui.shadcn.com/) for accessible UI components
    
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
    
- [Lucide](https://lucide.dev/) for beautiful icons
    

---

**Note**: Remember to update the personal information, project details, and contact information in the respective data files to customize the portfolio for your own use.