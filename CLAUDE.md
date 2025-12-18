# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/resume website built with React 17, showcasing professional projects, work experience, education, skills, and contact information. The site uses Material-UI (MUI v5) for components and styling, react-scroll for smooth navigation, and EmailJS for contact form functionality.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests in interactive watch mode
npm test

# Build for production (outputs to /build directory)
npm run build
```

## Architecture

### Component Structure

The application follows a single-page application (SPA) pattern with section-based navigation:

- **App.js**: Root component that renders all sections within a MUI Container
- **NavBar** (src/components/AppBar/NavBar.js): Fixed navigation using react-scroll Link components for smooth scrolling to sections
- **Header** (src/components/Header/Header.js): Hero section at the top
- **Projects** (src/components/Projects/Projects.js): Portfolio projects displayed in a grid of MUI Cards
- **Resume** (src/components/Resume/Resume.js): Work experience and education timeline with downloadable PDF
- **AboutMe** (src/components/AboutMe/AboutMe.js): Personal information section
- **Contact** (src/components/Contact/Contact.js): Contact form with EmailJS integration

### Navigation System

The site uses `react-scroll` for smooth section navigation. Each section has an `id` attribute that corresponds to navigation targets:
- `projectsSection` - Projects section
- `resumeSection` - Resume/experience section
- `aboutMeSection` - About Me section
- `contactSection` - Contact form section

NavBar Link components use these IDs with smooth scrolling and configurable offsets.

### Styling Approach

- **Material-UI v5**: Primary component library with custom theme colors (primary: #1B2838, secondary: #3B4F6E)
- **Emotion**: Used for styled components (e.g., StyledBox, StyledAvatar in Contact.js)
- **CSS Files**: Component-specific CSS files for custom styling (e.g., Resume.css, Projects.css)
- **AOS (Animate On Scroll)**: Used for scroll animations (initialized in Projects and Resume components)

### Static Assets

- Images stored in `src/assets/images/` (project screenshots, logos, profile pictures)
- Resume PDF stored in `src/assets/Resume.pdf`
- Public assets (favicon, logos) in `public/` directory

### Email Integration

Contact form uses EmailJS with hardcoded service configuration:
- Service ID: `service_i06cqs7`
- Template ID: `template_kq6uum4`
- User ID: `Ui4kz9EtSJajAXuqh`

Located in src/components/Contact/Contact.js. Form validation handled by react-hook-form.

## Key Dependencies

- **React 17.0.2**: Using legacy ReactDOM.render (not React 18)
- **@mui/material ^5.11.13**: Material-UI components
- **@mui/lab ^5.0.0-alpha.123**: Timeline components for Resume
- **react-scroll ^1.8.9**: Smooth scrolling navigation
- **emailjs-com ^3.2.0**: Email service integration
- **react-hook-form ^7.43.9**: Form validation
- **aos ^2.3.4**: Scroll animations

## Git Workflow

Current branch: `testing-devflow`
Main branch: `main`

Recent work includes updates to Resume component styling and functionality.
