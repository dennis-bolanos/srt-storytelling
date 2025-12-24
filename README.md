# SRT Storytelling Project - React Version

A React-based storytelling platform built with Vite and React Router.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
srt-storytelling/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Breadcrumbs.jsx
│   │   ├── Layout.jsx
│   │   ├── StoryCard.jsx
│   │   └── FilterPills.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── ShareStoryPage.jsx
│   │   ├── GuidedStoryPage.jsx
│   │   ├── GuidedStoryStep2-5.jsx
│   │   ├── MyStoriesPage.jsx
│   │   └── StoryDetailPage.jsx
│   ├── data/             # Data files
│   │   └── stories.js
│   ├── App.jsx           # Main app component with routes
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── styles.css            # Main stylesheet (imported in index.css)
├── package.json
├── vite.config.js
└── index.html
```

## Features

- **Component-based architecture** - Reusable React components
- **React Router** - Client-side routing
- **State management** - React hooks for local state
- **Responsive design** - Mobile-friendly layouts
- **Story filtering** - Filter stories by state
- **Multi-step forms** - Guided story creation flow
- **Story detail pages** - Full story view with images

## Technologies

- React 18
- React Router DOM 6
- Vite (build tool)
- Vanilla CSS (no CSS framework)

## Migration Notes

This project was converted from vanilla HTML/CSS/JS to React. The original HTML files are preserved in the root directory for reference, but the React app uses the new structure in the `src/` folder.

