# SkillLink — Freelance Job Matching Platform

A mobile-first web application concept designed to help beginner freelancers in Pakistan discover projects that match their actual skill level. Built as a UI/UX design and front-end development final exam project.

## Project overview

Pakistan's freelance economy is growing quickly, but beginner freelancers often struggle to find suitable projects among listings meant for experienced professionals. SkillLink addresses this by surfacing experience-level filters and a low-friction application flow, reducing the guesswork for someone applying for their first project.

## Live demo

- **Deployed app:** [SkillLink — Find projects that fit your level](https://skilllink-final-project.vercel.app/)
- **Figma design file:** [View on Figma](https://www.figma.com/design/GLnMIPtRyHk4RNMyI03u1u/Final-Paper-UIUX)

## Tech stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Figma (UX research, wireframes, high-fidelity design, and prototype)

## Features

- Responsive layout — optimized for mobile (375px) and desktop (1280px)
- Project search bar with a live keyword filter (JavaScript)
- Experience-level filter chips (Beginner, Remote, Budget)
- Project cards with title, budget, and experience-level badge
- Accessible color palette — button contrast verified against WCAG AA (4.5:1) using the WebAIM Contrast Checker
- Tap targets sized to a 44×44px minimum for mobile usability

## Design process

The design followed a full UX workflow before any code was written:

1. User persona and empathy map
2. Problem statement, HMW questions, and user flow
3. Low-fidelity wireframes
4. Design system foundation — color palette, typography scale, reusable button component
5. High-fidelity screen with accessibility checks
6. Clickable prototype with a micro-interaction (smart-animate transition on Apply)
7. Responsive front-end implementation
8. JavaScript keyword search filter

## Running locally

This project has no build step — it's static HTML/CSS/JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/Maazk111/skilllink-final-project-.git
   ```
2. Open `index.html` directly in a browser, or use the VS Code Live Server extension for auto-refresh during development.

## Project structure

```
├── index.html      → page markup + Tailwind classes
├── style.css        → minor custom overrides
├── script.js         → keyword search filter logic
└── README.md
```

## Author

Muhammad Maaz Khan
