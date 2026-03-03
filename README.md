# Table Clearings Challenge

A dashboard built with React, TypeScript, and Tailwind CSS for managing clearing cycles and organizations.

🚀 **Live Demo:** [https://table-clearings-challenge.vercel.app/](https://table-clearings-challenge.vercel.app/)

---

## What it does

- **Clearings** — View, filter, and manage settlement records. You can filter by organization, status, year, and week. The table includes a live search and shows totals at the bottom.
- **Organizations** — Browse the list of registered organizations with their details and status.

---

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Getting Started

### Requirements

- Node.js `>= 20`
- [pnpm](https://pnpm.io/) (recommended)

### Install dependencies

```bash
pnpm install
```

### Run in development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

---

## Project Structure

```
src/
├── assets/         # Icons and static assets
├── components/     # Reusable UI components (buttons, inputs, dropdowns, etc.)
├── data/           # Static JSON data (clearings, organizations)
├── types/          # TypeScript type definitions
├── utils/          # Helper functions (filters, week number, etc.)
└── views/
    ├── clearings/       # Clearings page and components
    └── organizations/   # Organizations page and components
```

---
