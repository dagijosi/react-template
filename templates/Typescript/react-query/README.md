# React + TypeScript + Redux Toolkit + TanStack Query + Tailwind + React Icons

This template provides a complete CRUD application setup with:

- ✅ **React** (v18+) for UI building
- ✅ **TypeScript** for type safety
- ✅ **Redux Toolkit** for state management
- ✅ **TanStack Query** (formerly React Query) for data fetching
- ✅ **React Router** for routing
- ✅ **Tailwind CSS** for styling
- ✅ **React Icons** for beautiful UI icons
- ✅ **Complete CRUD operations** implemented in the example

## Features

- Full CRUD functionality (Create, Read, Update, Delete)
- Seamless integration between React Query and Redux Toolkit
- Optimistic updates for better user experience
- Encapsulated data fetching and state management
- Responsive UI with Tailwind CSS
- TypeScript for type safety
- Proper error handling
- Clean project structure

## Project Structure

```
src/
├── QueryOption/         # React Query hooks and API functions with Redux integration
├── pages/               # Page components
├── router/              # React Router configuration
├── store/               # Redux store and slices
│   ├── hooks.ts         # Custom Redux hooks
│   ├── index.ts         # Store configuration
│   └── slices/          # Redux slices
│       └── todoSlice.ts # Todo state management
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
- Managing state with Redux Toolkit
- Creating new items
- Updating existing items
- Deleting items
- Pagination

## Technical Details

- Uses the latest React 18 features
- Implements optimistic updates for better UX
- Follows best practices for Redux Toolkit
- Uses TanStack Query for efficient data fetching
- Integrates React Query and Redux Toolkit seamlessly
  - Query hooks handle both data fetching and Redux state updates
  - Components remain simple and focused on UI logic
- Provides a clean, modular structure for scaling

## Why Redux with React Query?

This template demonstrates a powerful pattern where:

1. **React Query** handles all server-state concerns:
   - Data fetching, caching, and synchronization
   - Loading and error states
   - Automatic refetching

2. **Redux Toolkit** provides:
   - Global client-state management
   - Predictable state updates
   - Time-travel debugging via Redux DevTools
   - State persistence across component remounts

The integration keeps components clean by encapsulating data fetching and state management in custom hooks.
