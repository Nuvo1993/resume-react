# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# Resume React App

A small React single-page application for presenting a resume/portfolio. Bootstrapped with Create React App and structured for easy customization and deployment.

## Quick Links

- Live preview: local development at http://localhost:3000
- Source: repository root

## Tech Stack

- React (Create React App)
- JavaScript (ES6+)
- CSS (component-scoped styles under `src/components`)

## Getting Started

Prerequisites

- Node.js (>= 14) and npm

Install

```bash
npm install
```

Run (development)

```bash
npm start
```

Build (production)

```bash
npm run build
```

Test

```bash
npm test
```

## npm Scripts

- `start` — run the dev server on http://localhost:3000
- `build` — produce a production build into the `build/` folder
- `test` — run test watcher
- `eject` — eject CRA config (one-way)

## Project Structure

Top-level files and folders:

- `public/` — static public assets and HTML template
- `src/` — application source
	- `App.js` — root app component
	- `index.js` — app entry
	- `components/` — UI components grouped by feature
- `build/` — production build output (generated)

Components overview (in `src/components`):

- `Header/` — presents name/title (`src/components/Header/Header.js`)
- `AppBar/` — top navigation bar (`src/components/AppBar/NavBar.js`)
- `AboutMe/` — about section (`src/components/AboutMe/AboutMe.js`)
- `Projects/` — project list/cards (`src/components/Projects/Projects.js`)
- `Resume/` — resume view and download (`src/components/Resume/Resume.js`)
- `Contact/` — contact details or form (`src/components/Contact/Contact.js`)

For the component source, see [src/components](src/components).

## Development Notes

- Styles: component styles live alongside components in CSS files (e.g., `src/components/Header/Header.css`).
- Assets: images are under `src/assets/images`.
- Build artifacts are placed into the `build/` directory and are safe to deploy to static hosting.

## Deployment

The app can be deployed to any static hosting that serves the `build/` output (GitHub Pages, Netlify, Vercel, S3 + CloudFront, etc.).

General steps:

1. `npm run build`
2. Upload the contents of `build/` to your hosting provider

See Create React App deployment docs for provider-specific instructions: https://facebook.github.io/create-react-app/docs/deployment

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing, code style, and testing.

## Files to Know

- [src/index.js](src/index.js) — app bootstrap
- [src/App.js](src/App.js) — main application wrapper
- [src/components](src/components) — UI components

## License

This project does not include a license file. Add a `LICENSE` if you intend to open-source it.

---

The repository has received documentation updates: `CONTRIBUTING.md` and `docs/COMPONENTS.md` were added.
