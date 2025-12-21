# Resume React App - Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the Resume React App codebase, a single-page portfolio website built with React and Material-UI. It serves as a reference for AI agents working on enhancements, bug fixes, feature additions, styling improvements, or refactoring tasks.

### Document Scope

Comprehensive documentation of entire system - covering all components, styling patterns, integrations, and deployment setup.

### Change Log

| Date       | Version | Description                 | Author        |
| ---------- | ------- | --------------------------- | ------------- |
| 2025-12-21 | 1.0     | Initial brownfield analysis | Claude Sonnet |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry**: `src/index.js` - ReactDOM.render with StrictMode wrapper
- **Root Component**: `src/App.js` - Main application layout and component composition
- **Configuration**: `package.json` - Dependencies and npm scripts
- **Build Configuration**: Uses Create React App (react-scripts 5.0.1) - configuration is abstracted
- **CI/CD**: `.github/workflows/node.js.yml` - GitHub Actions for testing and building
- **Static Assets**: `src/assets/` - Images and Resume PDF
- **Public Assets**: `public/` - HTML template, favicon, manifest

### Main Components (in render order)

1. `src/components/AppBar/NavBar.js` - Navigation bar with smooth scroll
2. `src/components/Header/Header.js` - Hero section with profile pic and skills tag cloud
3. `src/components/Projects/Projects.js` - Portfolio projects showcase
4. `src/components/Resume/Resume.js` - Skills, work history, and education timeline
5. `src/components/Contact/Contact.js` - Contact form with EmailJS integration

**NOTE**: There's also `src/components/AboutMe/AboutMe.js` which appears to be an alternate/unused contact form component - not currently imported in App.js

## High Level Architecture

### Technical Summary

This is a **client-side only** single-page application (SPA) built with React 17. It's a portfolio/resume website with no backend server - all functionality runs in the browser. The only external integration is EmailJS for contact form submissions.

### Actual Tech Stack

| Category          | Technology              | Version    | Notes                                       |
| ----------------- | ----------------------- | ---------- | ------------------------------------------- |
| Runtime           | Node.js                 | 14.x-18.x  | CI tests against multiple versions          |
| Framework         | React                   | 17.0.2     | Uses legacy ReactDOM.render (not React 18)  |
| Build Tool        | Create React App        | 5.0.1      | react-scripts - webpack/babel abstracted    |
| UI Framework      | Material-UI (MUI)       | 5.11.x     | Components, icons, lab (Timeline)           |
| Styling           | CSS + Emotion           | 11.10.x    | Mix of CSS files and styled-components      |
| Forms             | React Hook Form         | 7.43.9     | Used in Contact component                   |
| Email Service     | EmailJS                 | 3.x        | @emailjs/browser + emailjs-com (redundant)  |
| Animations        | AOS (Animate On Scroll) | 2.3.4      | Fade-in effects throughout                  |
| Smooth Scrolling  | react-scroll            | 1.8.9      | Navigation link scroll behavior             |
| Skills Viz        | react-tagcloud          | 2.3.1      | Tag cloud in Header component               |
| Package Manager   | npm                     | -          | Uses package-lock.json                      |
| Version Control   | Git                     | -          | Hosted on GitHub                            |
| CI/CD             | GitHub Actions          | -          | Automated testing and builds                |

### Repository Structure Reality Check

- **Type**: Single repository (monorepo not needed for this simple app)
- **Package Manager**: npm (evidenced by package-lock.json)
- **Build System**: Create React App (CRA) - most config is hidden in react-scripts
- **Notable**: Standard CRA structure, not ejected

## Source Tree and Module Organization

### Project Structure (Actual)

```text
resume-react-app/
├── public/                     # Static assets served as-is
│   ├── index.html             # HTML template with root div
│   ├── favicon.ico            # Browser tab icon
│   ├── logo192.png            # PWA icons
│   ├── logo512.png
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO crawling rules
├── src/                       # Source code
│   ├── components/            # React components (organized by feature)
│   │   ├── AboutMe/          # UNUSED - alternate contact form
│   │   │   ├── AboutMe.js
│   │   │   └── AboutMe.css
│   │   ├── AppBar/           # Navigation bar
│   │   │   ├── NavBar.js
│   │   │   └── NavBar.css
│   │   ├── Contact/          # Contact form (ACTIVE - uses EmailJS)
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Header/           # Hero section with profile and skills
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Projects/         # Portfolio projects showcase
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   └── Resume/           # Skills, work history, education
│   │       ├── Resume.js
│   │       └── Resume.css
│   ├── assets/               # Images and documents
│   │   ├── images/           # Profile pics, project screenshots, logos
│   │   └── Resume.pdf        # Downloadable resume PDF
│   ├── App.js                # Root component - composes all sections
│   ├── App.css               # Global app styles
│   ├── index.js              # Entry point - ReactDOM.render
│   ├── index.css             # Global body/html styles
│   ├── logo.svg              # React logo (possibly unused)
│   ├── reportWebVitals.js    # Performance monitoring (CRA default)
│   └── setupTests.js         # Jest test setup (CRA default)
├── build/                     # Production build output (git ignored)
├── node_modules/              # Dependencies (git ignored)
├── .github/
│   └── workflows/
│       └── node.js.yml       # GitHub Actions CI pipeline
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies and scripts
├── package-lock.json         # Locked dependency versions
└── README.md                 # Standard CRA documentation
```

### Component Organization Pattern

Each component follows a **co-located pattern**:
- Component JS file and CSS file in same directory
- Directory named after component (e.g., `Header/Header.js`)
- Mix of functional components using hooks
- Some use MUI styled components, others use CSS files

### Key Modules and Their Purpose

#### App.js (src/App.js)
- **Purpose**: Main application shell, composes all page sections
- **Pattern**: Simple functional component, no state management
- **Renders**: NavBar → Header → Projects → Resume → Contact (in that order)
- **Styling**: Uses MUI Container with maxWidth="xl"

#### NavBar (src/components/AppBar/NavBar.js)
- **Purpose**: Sticky navigation bar with smooth scroll links
- **Library**: MUI AppBar + react-scroll Link components
- **Pattern**: Functional component, no state
- **Links**: Projects, Resume, About, Contact (with smooth scroll offsets)
- **Color**: Custom theme with #3B4F6E background
- **NOTE**: Creates MUI theme but doesn't actually use ThemeProvider (potential improvement area)

#### Header (src/components/Header/Header.js)
- **Purpose**: Hero section - profile, tagline, skills cloud
- **Pattern**: Functional component with hardcoded skills data
- **Features**:
  - Profile picture (DB9A0086.jpg)
  - Intro text with name and title
  - Skills tag cloud using react-tagcloud
  - AOS fade animations (fade-right, fade-left, fade-up)
- **Layout**: MUI Grid (responsive - different layouts for xs/lg)
- **Skills Data**: Hardcoded array with weights (.NET Core, C#, React, etc.)

#### Projects (src/components/Projects/Projects.js)
- **Purpose**: Portfolio project showcase cards
- **Pattern**: Functional component, hardcoded project data
- **Features**:
  - 4 project cards (TIAA Bank, Art Portfolio, Leafs Adventure, Internal)
  - MUI Card components with images
  - External links to live projects
  - AOS fade-up animation
- **Layout**: MUI Grid with responsive columns
- **NOTE**: Some links hardcoded to external sites

#### Resume (src/components/Resume/Resume.js)
- **Purpose**: Skills showcase, work history timeline, education timeline
- **Pattern**: Functional component with hardcoded resume data
- **Features**:
  - 3 skill categories (Front End, Back End, DevOps) with icons
  - MUI Timeline for work history (4 positions at TIAA/EverBank)
  - Education timeline (UNF, FSCJ) with logos
  - Download PDF button (links to src/assets/Resume.pdf)
- **Layout**: Complex nested MUI Grid + Paper + Card components
- **AOS**: fade-up animation on section
- **NOTE**: Work history data is hardcoded in component (could be externalized)

#### Contact (src/components/Contact/Contact.js)
- **Purpose**: Contact form with email integration
- **Pattern**: Functional component using react-hook-form
- **Features**:
  - Form fields: Name, Email, Message
  - Validation with error messages
  - EmailJS integration for sending emails
  - Profile avatar image
- **Integration**:
  - EmailJS service ID: `service_i06cqs7`
  - EmailJS template ID: `template_kq6uum4`
  - EmailJS user ID: `Ui4kz9EtSJajAXuqh` (EXPOSED - should be env var)
- **Styling**: Emotion styled-components with responsive design
- **State**: Uses useState for form fields (redundant with react-hook-form)

#### AboutMe (src/components/AboutMe/AboutMe.js) - UNUSED
- **Purpose**: Alternate contact form component
- **Status**: NOT imported in App.js - appears to be replaced by Contact.js
- **Pattern**: Similar to Contact but without EmailJS integration
- **NOTE**: This is dead code and could be removed to reduce confusion

## Data Models and APIs

### No Backend/Database

This application has **NO backend server** and **NO database**. All content is hardcoded directly in the React components.

### Hardcoded Data Locations

#### Skills Data
- **Location**: `src/components/Header/Header.js` (lines 11-30)
- **Format**: Array of objects with `value` (skill name) and `count` (weight/size)
- **Usage**: Rendered by TagCloud component

#### Work History
- **Location**: `src/components/Resume/Resume.js` (lines 176-303)
- **Format**: Embedded in Timeline JSX (not extracted to variable)
- **Includes**: Position title, company, dates, responsibilities

#### Education
- **Location**: `src/components/Resume/Resume.js` (lines 308-358)
- **Format**: Embedded in Timeline JSX
- **Includes**: School names, degrees, dates, logo images

#### Projects
- **Location**: `src/components/Projects/Projects.js` (lines 28-121)
- **Format**: Embedded in Card JSX (not extracted to variable)
- **Includes**: Project names, descriptions, images, external links

#### Skills Categories
- **Location**: `src/components/Resume/Resume.js` (lines 81-99)
- **Format**: Three arrays (frontEndSkills, backEndSkills, devOpsSkills)

### External API Integration

#### EmailJS
- **Purpose**: Send contact form submissions via email
- **Location**: `src/components/Contact/Contact.js`
- **Method**: emailjs.send() called on form submit
- **Configuration**: Service ID, Template ID, User ID (HARDCODED - security concern)
- **Response**: Alert user on success/failure
- **Dependencies**: Both `@emailjs/browser` and `emailjs-com` installed (redundant)

### Static Assets

#### Images
- **Location**: `src/assets/images/`
- **Types**: Profile photos, project screenshots, school logos
- **Import Pattern**: Direct ES6 imports in components
- **Format**: JPG, PNG

#### Documents
- **Location**: `src/assets/Resume.pdf`
- **Usage**: Download link in Resume component
- **Import Pattern**: Direct ES6 import

## Technical Debt and Known Issues

### Critical Issues

1. **EmailJS Credentials Exposed**
   - **Problem**: EmailJS service ID, template ID, and user ID are hardcoded in `Contact.js:56-64`
   - **Impact**: Security risk - credentials visible in source code and production bundle
   - **Recommendation**: Move to environment variables (.env file)
   - **Files**: `src/components/Contact/Contact.js`

2. **Redundant EmailJS Dependencies**
   - **Problem**: Both `@emailjs/browser` and `emailjs-com` installed (package.json:6,16)
   - **Impact**: Unnecessary bundle size increase
   - **Current Usage**: Only `emailjs-com` is actually imported
   - **Recommendation**: Remove unused `@emailjs/browser` dependency

3. **Legacy React Rendering**
   - **Problem**: Uses deprecated `ReactDOM.render()` instead of React 18's `createRoot()`
   - **Impact**: Not ready for React 18 concurrent features
   - **Files**: `src/index.js:7`
   - **Note**: React version is 17.0.2, so this is technically correct for now

### Medium Priority Issues

4. **Dead Code - AboutMe Component**
   - **Problem**: `src/components/AboutMe/` exists but is never imported/used
   - **Impact**: Confusion for developers, minor bundle size increase (if not tree-shaken)
   - **Files**: `src/components/AboutMe/AboutMe.js`, `src/components/AboutMe/AboutMe.css`
   - **Recommendation**: Delete or document why it exists

5. **Hardcoded Content**
   - **Problem**: All resume content (skills, work history, education, projects) is hardcoded in JSX
   - **Impact**: Difficult to update content without editing code
   - **Recommendation**: Extract to JSON/JS data files for easier maintenance

6. **Unused MUI Theme**
   - **Problem**: NavBar.js creates a MUI theme object but never wraps app with ThemeProvider
   - **Files**: `src/components/AppBar/NavBar.js:21-30`
   - **Impact**: Theme configuration has no effect, inline styles used instead
   - **Recommendation**: Either use ThemeProvider or remove theme object

7. **Mixed Styling Approaches**
   - **Problem**: Inconsistent styling - some components use CSS files, others use Emotion styled-components, others use MUI sx prop
   - **Files**: All component directories
   - **Impact**: Harder to maintain consistent styling patterns
   - **Examples**:
     - Header.js uses CSS file + MUI Grid
     - Contact.js uses Emotion styled-components
     - Resume.js uses CSS file + inline MUI styling

8. **Redundant State in Contact Form**
   - **Problem**: Contact.js uses both useState (lines 48-50) and react-hook-form
   - **Impact**: Unnecessary complexity, state not actually used by form fields
   - **Files**: `src/components/Contact/Contact.js`
   - **Recommendation**: Remove useState declarations

### Minor Issues

9. **AOS Initialization Pattern**
   - **Problem**: AOS.init() called inside component functions (Header, Projects, Resume)
   - **Impact**: Re-initializes AOS on every render (should only happen once)
   - **Recommendation**: Move to useEffect hook or call once in App.js

10. **Missing Alt Text**
    - **Problem**: Some images have generic alt text ("My Image")
    - **Files**: `src/components/Header/Header.js:56`, `src/components/Resume/Resume.js:329,353`
    - **Impact**: Poor accessibility

11. **Console.log in Production**
    - **Problem**: AboutMe.js has console.log(data) in form submit
    - **Files**: `src/components/AboutMe/AboutMe.js:46`
    - **Note**: Component is unused anyway (see issue #4)

12. **Commented Out Code**
    - **Problem**: NavBar.js has commented out button code and form code in Contact.js
    - **Files**: `src/components/AppBar/NavBar.js:55-58`, `src/components/Contact/Contact.js:40-45`
    - **Recommendation**: Remove or document why preserved

## Styling Patterns and Conventions

### Global Styles

- **Body Background**: Dark blue-gray (#1B2838) set in `src/App.css:3`
- **Secondary Sections**: Light gray (#F5F5F5) background via `.secondarySection` class
- **Font**: System font stack (Apple System, Roboto, etc.) from `src/index.css:3-5`

### Component Styling Approaches (Inconsistent)

1. **CSS Files** (Header, Projects, Resume, App)
   - Classic external CSS files imported at top
   - Class names applied to elements
   - Example: `className="App-header"`

2. **Emotion Styled Components** (Contact, AboutMe)
   - Tagged template literals
   - Example: `const StyledBox = styled(Box)`...`
   - Includes media queries for responsive design

3. **MUI sx Prop** (Resume, Projects)
   - Inline style objects
   - Example: `sx={{ height: 176 }}`

4. **Inline Styles** (NavBar)
   - style prop with JS objects
   - Example: `style={{ backgroundColor: '#3B4F6E' }}`

### Color Palette (Extracted from code)

- **Primary Dark**: #1B2838 (app background)
- **Primary Blue**: #3B4F6E (navbar, theme)
- **Accent Blue**: #3f51b5 (avatar borders)
- **Light Gray**: #F5F5F5 (secondary sections)
- **White**: #fff (papers, cards)
- **Text**: #333 (body text)

### Responsive Design

- **Framework**: MUI Grid system with breakpoints (xs, lg primarily)
- **Breakpoints**:
  - xs: mobile (12 columns)
  - lg: desktop (3-6 columns typically)
- **Custom Media Queries**: In Emotion styled-components (Contact.js:22-24)

### Animation Pattern

- **Library**: AOS (Animate On Scroll)
- **Common Effects**: fade-up, fade-right, fade-left
- **Usage**: `data-aos="fade-up"` attributes on elements
- **Configuration**: Default options used (initialized without custom config)

## Integration Points and External Dependencies

### External Services

| Service  | Purpose         | Integration Type | Key Files                                | Notes                           |
| -------- | --------------- | ---------------- | ---------------------------------------- | ------------------------------- |
| EmailJS  | Contact form    | JavaScript SDK   | `src/components/Contact/Contact.js:2,55` | Credentials hardcoded (issue)   |

### No Internal APIs

This is a **pure frontend application** with no backend services. No REST APIs, GraphQL, WebSockets, or other server communication except EmailJS.

### Browser APIs Used

- **DOM**: Standard ReactDOM.render
- **LocalStorage**: Not used
- **Fetch/XHR**: Only through EmailJS library
- **Web Vitals**: Performance monitoring via reportWebVitals (CRA default)

### Third-Party UI Libraries

- **Material-UI (MUI)**: Entire UI framework
  - Core components: AppBar, Button, Card, Grid, Typography, etc.
  - Icons: @mui/icons-material (MenuIcon, AdbIcon, PictureAsPdf, etc.)
  - Lab: Timeline components (experimental MUI components)
- **AOS**: Scroll animations
- **React Scroll**: Smooth scrolling navigation
- **React TagCloud**: Skills visualization
- **React Hook Form**: Form state management

## Development and Deployment

### Local Development Setup

#### Prerequisites
- Node.js 14.x, 16.x, or 18.x (tested on all three in CI)
- npm (comes with Node.js)

#### Setup Steps
1. Clone repository: `git clone [repo-url]`
2. Install dependencies: `npm install`
3. Start dev server: `npm start`
4. Browser opens automatically to `http://localhost:3000`

#### Known Setup Issues
- **EmailJS**: Contact form will only work if EmailJS service is configured with the hardcoded credentials
- **Images**: All images must be in `src/assets/images/` directory
- **PDF**: Resume.pdf must exist in `src/assets/`

### Build and Deployment Process

#### Build Command
```bash
npm run build
```
- Creates optimized production build in `build/` directory
- Minifies JS, CSS, HTML
- Bundles all assets with content hashes
- Output is static files ready for deployment

#### Test Command
```bash
npm test
```
- Runs Jest test runner (Create React App default)
- Currently minimal/default tests only (App.test.js)

#### Scripts Available (from package.json)

```json
{
  "start": "react-scripts start",      // Dev server with hot reload
  "build": "react-scripts build",      // Production build
  "test": "react-scripts test",        // Jest test runner
  "eject": "react-scripts eject"       // Eject from CRA (irreversible)
}
```

### CI/CD Pipeline

#### GitHub Actions
- **File**: `.github/workflows/node.js.yml`
- **Trigger**: Push or PR to `main` branch
- **Jobs**:
  1. Install dependencies (`npm ci`)
  2. Build project (`npm run build`)
  3. Run tests (`npm test`)
- **Matrix**: Tests on Node 14.x, 16.x, 18.x
- **Platform**: ubuntu-latest

#### Deployment
- **Current**: Manual deployment (no automatic deploy in workflow)
- **Build Output**: `build/` directory contains static files
- **Deployment Options**: Any static hosting (Netlify, Vercel, GitHub Pages, S3, etc.)
- **Note**: Recent commit mentions "commit final changes before first deploy" - may have been deployed manually

### Environment Variables

#### Current State
- **NO .env file** in repository
- **NO environment variables** used in code
- **Problem**: EmailJS credentials are hardcoded (should be env vars)

#### Recommended Setup
Create `.env` file (add to .gitignore):
```
REACT_APP_EMAILJS_SERVICE_ID=service_i06cqs7
REACT_APP_EMAILJS_TEMPLATE_ID=template_kq6uum4
REACT_APP_EMAILJS_USER_ID=Ui4kz9EtSJajAXuqh
```

Update Contact.js to use:
```javascript
process.env.REACT_APP_EMAILJS_SERVICE_ID
```

## Testing Reality

### Current Test Coverage

- **Unit Tests**: Minimal - only default CRA test (App.test.js)
- **Integration Tests**: None
- **E2E Tests**: None
- **Manual Testing**: Likely primary QA method

### Existing Tests

#### App.test.js (src/App.test.js)
```javascript
test('renders learn react link', () => {
  // Default CRA test - likely not updated for this project
});
```
**NOTE**: This test probably doesn't match actual app content and may be failing

### Running Tests

```bash
npm test              # Interactive watch mode (Jest)
npm run build         # Runs tests as part of build validation
```

### Test Infrastructure

- **Framework**: Jest (included with react-scripts)
- **Testing Library**: @testing-library/react, @testing-library/jest-dom
- **Setup**: setupTests.js configures testing environment
- **Coverage**: Not configured or measured

### Testing Gaps

- No tests for individual components
- No form validation tests
- No EmailJS integration tests (would need mocking)
- No accessibility tests
- No visual regression tests
- CI runs tests but no coverage requirements

## Code Quality and Development Patterns

### JavaScript/React Patterns

#### Component Style
- **All functional components** (no class components)
- **Hooks used**: useState, useForm (from react-hook-form)
- **No custom hooks**: Could extract form logic, AOS setup, etc.
- **No prop-types or TypeScript**: No runtime or compile-time type checking

#### State Management
- **NO global state** (no Redux, Context, etc.)
- **All state is local** to components (minimal state overall)
- **Form state**: Managed by react-hook-form
- **Data**: Hardcoded, no state needed

#### Data Flow
- **One-way data flow**: Standard React
- **No props passed between components**: Each section is independent
- **No component communication**: No shared state or events

### File Organization
- **By feature**: Each component in own directory with CSS
- **Co-location**: Component + styles together
- **Assets**: Centralized in src/assets/

### Code Style
- **Indentation**: Mix of 2-space (most files)
- **Quotes**: Mix of single and double quotes
- **Semicolons**: Used consistently
- **Naming**: PascalCase for components, camelCase for variables
- **No linter config**: Extends CRA default (react-app, react-app/jest)
- **Formatting**: No Prettier config, inconsistent formatting

### Best Practices Followed
- Functional components with hooks
- Separation of concerns (components, styles, assets)
- Semantic HTML (mostly through MUI components)
- Responsive design with Grid system

### Anti-Patterns / Areas for Improvement
- Hardcoded data in JSX (not DRY)
- No component composition/reusability (Cards, Timeline items could be abstracted)
- Mixed styling approaches (inconsistent)
- No prop validation
- AOS initialization in component body (side effect outside useEffect)
- No error boundaries
- No loading states
- No accessibility attributes (aria-labels, etc.)

## Accessibility Considerations

### Current State

#### Good
- Semantic HTML through MUI components
- Form labels properly associated with inputs
- Keyboard navigation works (browser defaults)

#### Issues
- Generic alt text on images ("My Image")
- No ARIA labels on navigation links
- No skip-to-content link
- Color contrast not verified
- No focus management for scroll navigation
- Form error messages may not be announced properly to screen readers

## Performance Considerations

### Current State

#### Bundle Size
- **Not measured**: No bundle analyzer configured
- **Potential bloat**:
  - Two EmailJS libraries (one unused)
  - Full MUI library (could use tree-shaking better)
  - All images bundled (not lazy loaded)

#### Optimization Opportunities
1. **Code splitting**: Could lazy load sections with React.lazy
2. **Image optimization**: Images not optimized/compressed
3. **Remove unused deps**: @emailjs/browser
4. **AOS re-initialization**: Happening on every render of components
5. **PDF size**: Resume.pdf is 80KB (reasonable but could be optimized)

#### Performance Monitoring
- **Web Vitals**: reportWebVitals.js exists but likely not configured
- **No analytics**: No Google Analytics or similar
- **Lighthouse**: Not run as part of CI

## Browser Support

### Targeted Browsers (from package.json)

#### Production
```
>0.2%
not dead
not op_mini all
```
(Supports 99.8% of global users, excludes dead browsers and Opera Mini)

#### Development
```
last 1 chrome version
last 1 firefox version
last 1 safari version
```

### Known Compatibility
- **Modern browsers only**: Uses ES6+, React 17, modern CSS
- **No IE11 support**: Would break without polyfills
- **Mobile responsive**: Tested on mobile breakpoints

## Security Considerations

### Current Issues

1. **Exposed EmailJS Credentials** (CRITICAL)
   - Service ID, Template ID, User ID visible in source
   - Anyone can view in browser DevTools or GitHub
   - Could be used to spam through your EmailJS account

2. **No Input Sanitization**
   - Contact form doesn't sanitize user input
   - EmailJS handles this on their end, but still a concern

3. **Dependencies**
   - 1000+ dependencies (from node_modules)
   - No automated security scanning (could add npm audit to CI)
   - Last dependency update: April 2023 (may have vulnerabilities)

### Recommendations
- Move EmailJS credentials to environment variables
- Add .env to .gitignore
- Run `npm audit` regularly
- Update dependencies (especially security patches)
- Add Content Security Policy headers (if deploying to custom server)

## Common Development Tasks

### How to Add a New Section

1. Create component directory: `src/components/NewSection/`
2. Create component file: `NewSection.js`
3. Create styles: `NewSection.css`
4. Import in App.js: `import NewSection from './components/NewSection/NewSection.js'`
5. Add to render: `<NewSection />` in desired order
6. Add navigation link in NavBar.js with scroll target

### How to Update Content

#### Skills (Header tag cloud)
- Edit `src/components/Header/Header.js` lines 11-30
- Change `value` (skill name) or `count` (size weight)

#### Work History
- Edit `src/components/Resume/Resume.js` Timeline section
- Update dates, titles, descriptions

#### Projects
- Edit `src/components/Projects/Projects.js` Card components
- Update images in `src/assets/images/`
- Update links, descriptions

#### Contact Form
- EmailJS template edited on EmailJS.com dashboard
- Form fields in `src/components/Contact/Contact.js`

### How to Update Styles

#### Global Colors
- App background: `src/App.css` line 3
- Body styles: `src/index.css`

#### Component Styles
- Find component directory
- Edit corresponding .css file or styled-component

#### MUI Theme
- Would need to wrap App in ThemeProvider (currently not used)
- Theme partially defined in NavBar.js but not applied

### How to Deploy

1. Run `npm run build`
2. Upload `build/` directory contents to static host
3. Configure host to serve index.html for all routes (SPA routing)
4. Ensure environment variables set if using .env approach

### How to Update Resume PDF

1. Replace `src/assets/Resume.pdf`
2. Rebuild and redeploy
3. Link in Resume.js (line 365) automatically uses new file

## Appendix - Useful Commands and Scripts

### Development Commands

```bash
npm start              # Start dev server (http://localhost:3000)
npm run build          # Production build to build/ directory
npm test               # Run test suite in watch mode
npm test -- --coverage # Run tests with coverage report
npm run eject          # Eject from CRA (IRREVERSIBLE - not recommended)
```

### Dependency Management

```bash
npm install            # Install all dependencies
npm install [package]  # Add new dependency
npm update            # Update dependencies (use with caution)
npm audit             # Check for security vulnerabilities
npm audit fix         # Auto-fix security issues (test after!)
```

### Git Workflow

```bash
git status            # Check current branch and changes
git add .             # Stage all changes
git commit -m "msg"   # Commit changes
git push origin main  # Push to GitHub (triggers CI)
```

### Debugging Tips

#### Dev Server Issues
- Clear cache: Delete `node_modules/` and `package-lock.json`, run `npm install`
- Port conflict: Kill process on port 3000 or set PORT env var

#### Build Issues
- Check Node version: `node --version` (should be 14-18)
- Clear build: `rm -rf build/` then rebuild

#### Styling Issues
- Check browser DevTools for CSS conflicts
- MUI styles should have higher specificity than custom CSS
- Emotion styles have highest specificity

#### Email Form Not Working
- Check EmailJS dashboard for service status
- Verify credentials in Contact.js match EmailJS account
- Check browser console for errors

### Browser DevTools

- **React DevTools**: Install extension to inspect component tree
- **Network Tab**: Monitor EmailJS requests
- **Console**: Look for AOS initialization messages, errors
- **Lighthouse**: Run audit for performance, accessibility, SEO

## Future Enhancement Recommendations

### Quick Wins (Low effort, high value)

1. Extract EmailJS credentials to .env
2. Remove unused AboutMe component
3. Remove unused @emailjs/browser dependency
4. Fix AOS initialization (move to useEffect)
5. Update image alt text for accessibility
6. Add favicon/title customization in public/index.html

### Medium Effort Improvements

1. Extract hardcoded data to JSON files
2. Standardize styling approach (choose one: CSS Modules, Emotion, or MUI sx)
3. Add proper TypeScript or prop-types
4. Create reusable Card/Timeline components
5. Add bundle analyzer to measure size
6. Upgrade to React 18 (createRoot)
7. Add basic component tests

### Major Refactoring Opportunities

1. Content Management System (CMS) integration
2. Backend API for contact form (instead of EmailJS)
3. Blog section with markdown support
4. Admin panel for content editing
5. Multi-language support
6. Dark mode toggle
7. Animated page transitions
8. Project detail pages (routing with React Router)

---

## Document Maintenance

This document should be updated when:
- Major architectural changes are made
- New dependencies are added
- Deployment process changes
- Technical debt is addressed
- New features are added

**Last Updated**: 2025-12-21
**Next Review**: When significant changes occur
