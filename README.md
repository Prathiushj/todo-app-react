# Doable

A simple, clean todo list app built with React and Vite. Add tasks, check them off, and delete them when you're done.

## Features

- ✅ Add new todos
- ☑️ Mark todos as complete (with strikethrough styling)
- 🗑️ Delete todos
- 📱 Responsive layout with Bootstrap grid

## Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Bootstrap](https://getbootstrap.com/) — layout and base styling
- [Bootstrap Icons](https://icons.getbootstrap.com/) — icons (trash icon)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/doable.git
cd doable

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server. Open the printed local URL (typically `http://localhost:5173`) in your browser.

### Build

```bash
npm run build
```

Compiles the app for production into the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
doable/
├── src/
│   ├── App.jsx      # Main app component
│   ├── App.css       # App styling
│   └── main.jsx      # Entry point
├── index.html
└── package.json
```

## Roadmap / Known Limitations

- Todos are currently stored in-memory only and will reset on page refresh (no persistence yet)
- No edit-in-place functionality for existing todos
