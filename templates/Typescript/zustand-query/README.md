# React + TypeScript + Zustand + TanStack Query + Tailwind + React Icons

This template provides a complete CRUD application setup with Zustand and React Query:

- ✅ **React** (v18+) for UI building
- ✅ **TypeScript** for type safety
- ✅ **Zustand** for state management
- ✅ **TanStack Query** (formerly React Query) for data fetching
- ✅ **React Router** for routing
- ✅ **Tailwind CSS** for styling
- ✅ **React Icons** for beautiful UI icons
- ✅ **Complete CRUD operations** implemented in the example

## Features

- Full CRUD functionality (Create, Read, Update, Delete)
- Zustand for lightweight state management
- TanStack Query for data fetching and caching
- Optimistic updates for better user experience
- Responsive UI with Tailwind CSS
- TypeScript for type safety
- Proper error handling
- Clean project structure

## Project Structure

```
src/
├── QueryOption/         # React Query hooks
├── pages/               # Page components
├── router/              # React Router configuration
├── store/               # Zustand store
│   └── todoStore.ts     # Todo state management
├── utils/               # Utility functions
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

This template includes a fully functional Todo application that demonstrates:

- Fetching data with TanStack Query
- Managing state with Zustand
- Creating new items
- Updating existing items
- Deleting items
- Pagination

## Technical Details

- Uses the latest React 18 features
- Implements optimistic updates for better UX
- Integrates Zustand with React Query for efficient state management
- Clean, simple components with minimal boilerplate

## Why Zustand with React Query?

This template demonstrates a powerful pattern that combines:

1. **Zustand** - A tiny, lightning-fast state management solution
   - Simple API with hooks
   - No boilerplate compared to Redux
   - Powerful middleware system
   - TypeScript friendly

2. **React Query** - Data fetching and caching
   - Smart request deduplication
   - Background fetching
   - Pagination and infinite scrolling support
   - Optimistic updates

Together they create a complete state management solution:
- Zustand handles UI and client state
- React Query manages server state and data fetching
- Clear separation of concerns without duplication

This approach is perfect for applications that need efficient state management with minimal overhead.
