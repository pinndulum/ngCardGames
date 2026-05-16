# Changelog

All notable changes to JM Card Games are documented here.

## 1.2.0 - 2026-05-16

### Added

- Added Mahjong with multiple layout patterns, seeded replay, matching hints, responsive tile symbols, and touch-friendly horizontal board scrolling.
- Added Dice Table with configurable dice from `d2` through `d100`, presets, seeded roll replay, roll history, die locking, reset selection, and mobile shake-to-roll support.
- Added shared seeded shuffle helpers for replayable non-card game setup.

### Changed

- Moved solitaire seed/deck identifiers into the page title area to prevent mobile overflow.
- Refined Dice toolbar ordering, mobile-only shake toggle visibility, die controls, and roll surface spacing.
- Improved Mahjong tile sizing, symbols, hint visibility, blocked-tile readability, and mobile board start alignment.

### Verified

- `npm run build`
- `npm run lint`
- Mobile and desktop browser visual QA for Dice and Mahjong.

## 1.1.0 - 2026-05-15

### Added

- Implemented complete FreeCell Solitaire gameplay with free cells, foundations, legal sequence movement, undo, replay, auto-foundation moves, and mobile-friendly tap movement.
- Implemented complete Spider Solitaire gameplay with two decks, stock deals, same-suit sequence movement, automatic completed-run collection, undo, replay, and mobile-friendly tap movement.
- Added `?seed=` URL loading for Klondike, FreeCell, and Spider.
- Added clickable Deal seed pills that update the current URL with the active shuffle seed for sharing or bookmarking.
- Added Klondike single-click quick moves using the previous double-click move behavior while preserving drag/drop.

### Changed

- Moved shared Klondike toolbar/status/cheat-panel styles out of the component stylesheet to keep component CSS within Angular budgets.

### Verified

- `npm run build`
- `npm run lint`

## 1.0.2 - 2026-05-15

### Added

- Added Klondike deal replay from the current shuffle seed.
- Added Klondike cheat mode with stock/tableau peeking, palming, cover swaps, and undo support.

### Changed

- Replaced the Klondike draw-count slider with a Material slide toggle for Draw 1 and Draw 3.
- Updated Klondike replay and new-game confirmation flow to restart immediately after confirming.
- Improved Klondike drag/drop placeholders, card reveal timing, and drag animation behavior.

### Fixed

- Fixed initial deck cards not tracking their owning pile, which blocked stock cheat actions.
- Fixed replay/new-game confirmation requiring a second button click before the deal reset.

### Verified

- `npm run build`
- `npm run lint`
- `npm run test:ci`

## 1.0.1 - 2026-05-15

### Added

- Added replayable deck shuffle seeds using a dedicated `SeededGuid` utility.
- Added unit coverage for seeded GUID generation and replayed deck shuffle order.

### Changed

- Kept `Guid.newGuid()` as an always-random GUID generator while moving deterministic GUID behavior into `SeededGuid`.
- Updated `Deck.shuffle()` to expose a replay token containing the shuffle seed and count.

### Verified

- `npm run build`
- `npm run lint`
- `npm run test:ci`

## 1.0.0 - 2026-05-15

### Added

- Added Angular 21-ready documentation for setup, commands, project layout, QA, and deployment.
- Added this changelog.
- Added responsive Home page card/deck artwork using existing card assets.
- Added Home page content structure with section subheads, a quick-stat strip, and a video caption.
- Added mobile sidebar close coverage for route links.
- Added footer back-to-top tests for scroll activation and smooth-scroll behavior.

### Changed

- Upgraded the application to Angular 21 following the updated `ng-randomizer` project pattern.
- Migrated the app to standalone Angular bootstrap and lazy standalone routes.
- Updated Angular CLI/build tooling, Angular Material/CDK, TypeScript, ESLint, Karma, and related test tooling.
- Replaced legacy ESLint configuration with the current flat-config `angular-eslint` setup.
- Removed deprecated `baseUrl` from `tsconfig.json`.
- Reworked Klondike styling with responsive card sizing, tighter desktop tableau spacing, lighter table colors, improved mobile fit, drag preview styling, and card movement animation.
- Polished app shell styling for the header, sidebar, footer, cards, page titles, and mobile spacing.
- Aligned footer back-to-top behavior with `ng-randomizer` using a scroll listener, signal state, and a real button.
- Improved mobile Home layout, iframe fit, footer wrapping, and page title stacking.
- Updated external links to open safely in a new tab where appropriate.
- Corrected visible spelling and capitalization issues found during the documentation and Home page pass.

### Removed

- Removed obsolete Angular module files and legacy routing/module patterns during the Angular 21 migration.
- Removed the deprecated `baseUrl` compiler option.
- Removed generated local serve log files from the workspace.

### Verified

- `npm run build`
- `npm run lint`
- `npm run test:ci`
- Mobile and desktop screenshot checks for Home and Klondike.
