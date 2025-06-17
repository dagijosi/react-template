---

# react-dagis

A simple CLI tool to generate React starter projects with various configurations including **Redux Toolkit**, **React Query**, **Zustand**, and **Redux Saga** — in just a few seconds! Choose between **TypeScript** and **JavaScript** for your project.

---

## ✨ Features
- 🚀 Quickly scaffold a new React project.
- 🔄 Choose between TypeScript and JavaScript.
- 📦 Multiple template options to fit your needs.
- ⚡ No global install needed — run directly with `npx`.
- 🛠 Automatically installs dependencies after generation.

---

## 📦 Installation

You don't need to install anything!

Just run it using **npx**:

```bash
npx react-dagis
```

Follow the prompts to select your language, template, and name your project.

---

## 🚀 Usage

After running:

```bash
npx react-dagis
```

You will be prompted to:

1. Choose your programming language:
   - **TypeScript** - Type-safe JavaScript with better tooling and error prevention. Recommended for larger projects.
   - **JavaScript** - Familiar JavaScript syntax without type annotations. Simpler to start with for smaller projects.

2. Choose a starter template:
   - **React + Redux Toolkit + React Query** - Full-featured setup with global state management (Redux) and efficient data fetching (React Query). Best for complex applications.
   - **React + React Query (no Redux)** - Lightweight setup focused on efficient data fetching. Best for simpler apps that don't need complex global state.
   - **React + Zustand + React Query** - Modern alternative with simpler state management (Zustand) and efficient data fetching. Great balance of simplicity and power.
   - **React + Redux Toolkit + Redux Saga** - Advanced setup for complex async workflows using Redux Saga. Ideal for apps with complex state and side effects.

3. Enter your new project name.

Then, `react-dagis` will:
- Copy the selected template.
- Install all required dependencies.
- Show you how to start your project!

Example output:
```
Choose your Programming Language
❯ TypeScript
  JavaScript

Choose your starter template
❯ React + Redux Toolkit + React Query
  React + React Query (no Redux)
  React + Zustand + React Query
  React + Redux Toolkit + Redux Saga

What's your project name? (my-app)

Installing dependencies...

🚀 Project setup complete!

👉 cd my-app
👉 npm run dev
```

---

## 🛠 Scripts

Inside your generated project:
- Start development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```

---

## 📋 Requirements

- Node.js v16 or higher
- npm v8 or higher

---

## 📜 License

MIT © 2025 [Dagmawi Yoseph](https://github.com/your-github-here)

---

## ❤️ Contributing

Pull requests are welcome!  
Feel free to open issues or submit feature requests.

---

# 🚀 Quick Start

```bash
npx react-dagis
```

---

# 🔥 Pro Tip

You can even create it in one line:

```bash
npx react-dagis@latest
```

to always use the newest version!

---

# 📂 Folder Structure

The structure of the generated project is like:

```
my-app/
├── public/
├── src/
│   ├── app/
│   ├── features/
│   ├── components/
│   └── hooks/
├── package.json
├── README.md
└── vite.config.js
```

# 📝 Git Configuration

Make sure to add a `.gitignore` file to your project with the following contents:

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

This will prevent unnecessary files from being tracked in your git repository.

---

# 🌟 Credits

Built with ❤️ by [Dagmawi Yoseph](https://github.com/your-github-here).

---

# Important Notes

- No need to `npm install react-dagis` — **only use `npx react-dagis`**!
- Your local project won't be bloated with unused packages.

---

**✅ This README is ready for you to just copy-paste into your project.**

---
