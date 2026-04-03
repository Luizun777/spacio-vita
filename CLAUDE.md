# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Spacio Vita** is a single-page wellness center website built with Angular 21. It's a landing page showcasing different wellness services (nutrition, medicine, spa, testimonials, and contact). The app uses a component-based architecture with standalone components (Angular's latest pattern, not NgModules).

## Key Technologies

- **Angular 21.2.0** — Standalone components, signals for reactivity
- **TypeScript 5.9.2** — Strict mode enabled
- **Tailwind CSS 4.2.2** + Tailwind Forms plugin — Utility-first styling
- **SCSS** — Component-scoped styles
- **Vitest + jsdom** — Unit testing
- **npm 10.9.2** — Package manager
- **Prettier** — Code formatting with Angular HTML parser support

## Development Commands

```bash
# Start development server (http://localhost:4200)
npm start
# or: ng serve

# Build for production (dist/ directory)
npm run build
# or: ng build

# Build with watch mode (rebuilds on file changes)
npm run watch
# or: ng build --watch --configuration development

# Run unit tests with Vitest
npm test
# or: ng test

# Generate new component (creates .ts, .html, .scss files)
ng generate component component-name
```

## Architecture & File Structure

```
src/
├── app/
│   ├── components/          # Page sections (navbar, hero, services, etc.)
│   │   ├── navbar/         # Navigation header
│   │   ├── hero/           # Landing hero section
│   │   ├── nutrition/      # Nutrition service section
│   │   ├── medicine/       # Medicine service section
│   │   ├── spa/            # Spa & relaxation service section
│   │   ├── testimonials/   # Customer testimonials
│   │   ├── contact/        # Contact form section
│   │   ├── footer/         # Footer
│   │   └── mobile-nav/     # Mobile navigation
│   ├── app.ts              # Root component (imports all sections)
│   ├── app.html            # Root template (sections arranged sequentially)
│   ├── app.scss            # Global app styles
│   ├── app.routes.ts       # Routing configuration (currently empty)
│   ├── app.config.ts       # Application providers/config
│   └── app.spec.ts         # App component tests
├── main.ts                 # Bootstrap entry point
└── styles.scss             # Global styles (Tailwind directives)

public/                      # Static assets (referenced in build config)
```

## Component Pattern

Each component follows this structure:
- **ComponentName.ts** — Standalone component class using `@Component` decorator
- **component-name.html** — Template file
- **component-name.scss** — Component-scoped SCSS styles
- Uses signals (`signal<T>()`) for reactive state
- Uses `CommonModule` for structural directives (e.g., `*ngIf`, `*ngFor`)

**Example component structure:**
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-name',
  imports: [CommonModule],
  templateUrl: './component-name.html',
  styleUrl: './component-name.scss',
})
export class ComponentNameComponent {
  // Use signals for reactive state
  mySignal = signal<string>('initial value');
}
```

## Styling

- **Global styles** — `src/styles.scss` (Tailwind directives: `@tailwind`, `@layer`)
- **Component styles** — Scoped `.scss` files alongside `.ts` files (configured in `angular.json` with `inlineStyleLanguage: "scss"`)
- **Tailwind CSS** — Utility classes in templates, configured via PostCSS (`postcss.config.json`)
- **Forms** — Enhanced with `@tailwindcss/forms` plugin for better form styling

**Prettier config enforces:**
- 100 character line width
- Single quotes
- Angular HTML parser for `.html` files

## Testing

- **Test files** — `*.spec.ts` alongside component files
- **Test runner** — Vitest with jsdom environment
- **Example:** `ng test` runs all tests; create test files with pattern `**/*.spec.ts`

## Build Configuration

- **Output** — `dist/` directory
- **Production budgets** — 500 kB initial (warning), 1 MB (error); 4 kB per component style (warning), 8 kB (error)
- **Development** — Source maps enabled, unoptimized for faster iteration
- **Assets** — Public folder files copied to output

## Notes

- The app is a landing page with no routing configured yet (routes array is empty)
- Smooth scrolling navigation in navbar uses element IDs and `scrollIntoView()`
- Uses Angular's latest patterns (standalone components, signals) rather than older NgModule/RxJS patterns
- Component-scoped styles are automatically encapsulated by Angular
