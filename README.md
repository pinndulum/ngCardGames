# JM Card Games

JM Card Games is an Angular application for exploring card-game logic, UI layout, and reusable game primitives. Klondike, FreeCell, and Spider are implemented as playable solitaire surfaces, with a Free Play route still available as a future sandbox.

Current app version: `1.4.0`

## Tech Stack

- Angular `21`
- Angular Material and CDK drag/drop
- Bootstrap, Bootstrap Icons, Boxicons, and Remix Icon assets
- TypeScript `5.9`
- ESLint flat config with `angular-eslint`
- Karma/Jasmine unit tests with Chrome Headless

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

The app normally runs at `http://localhost:4200/`. If that port is busy, Angular will offer another port.

## Useful Commands

```bash
npm run build
npm run lint
npm run lint:fix
npm run test
npm run test:ci
npm run watch
```

GitHub Pages build/deploy helpers:

```bash
npm run build:ghpages
npm run ghpages
```

`test:ci` runs the suite once in Chrome Headless and is the best quick verification command before opening a PR.

## Project Layout

- `src/app/routing/routes.ts` - lazy route definitions.
- `src/app/components/layouts/` - header, sidebar, footer, and shared layout state.
- `src/app/components/pages/home/` - landing/dashboard content.
- `src/app/components/pages/games/facecards/solitaire/` - Klondike, FreeCell, and Spider UI and game interactions.
- `src/app/models/` - card, deck, game, and history models.
- `src/app/services/` - app services such as alerts, loading state, and preferences.
- `src/assets/img/cards/` - card face/back image assets used by the games and Home page.
- `src/styles.scss` - global visual system and shared responsive styling.

## Development Notes

- The app uses standalone Angular components and lazy route loading.
- The sidebar is controlled by `SidebarStateService`; on mobile, navigation links and the backdrop close the sidebar.
- Solitaire games use Angular CDK drag/drop, tap-friendly quick movement, seeded deals, and responsive CSS variables for card sizing.
- External links should use `target="_blank"` with `rel="noopener"`.
- Generated serve logs such as `ng-serve.out.log` and `ng-serve.err.log` are ignored by git.

## QA Checklist

Before handing off a change, run:

```bash
npm run build
npm run lint
npm run test:ci
```

For UI changes, also check:

- Mobile width around `360px` and `390px`.
- Desktop width around `1440px`.
- Sidebar open/close behavior on narrow screens.
- Solitaire card fit, drag preview behavior, seeded deal URLs, and reduced-motion handling.
- Footer back-to-top visibility after scrolling.

## Deployment

The GitHub Pages build uses:

```bash
npm run build:ghpages
```

That command builds with `--base-href /ngCardGames/`, matching the expected GitHub Pages route base.

## Contributing

Keep changes scoped and prefer the existing Angular 21, standalone-component, strict-TypeScript patterns. When adjusting game behavior, add or update focused tests around the changed logic.
