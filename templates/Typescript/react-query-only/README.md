# React + TypeScript + TanStack Query + Tailwind + React Icons

This template provides a complete CRUD application setup with only React Query for state management:

- ✅ **React** (v18+) for UI building
- ✅ **TypeScript** for type safety
- ✅ **TanStack Query** (formerly React Query) for data fetching and state management
- ✅ **React Router** for routing
- ✅ **Tailwind CSS** for styling
- ✅ **React Icons** for beautiful UI icons
- ✅ **Complete CRUD operations** implemented in the example

## Features

- Full CRUD functionality (Create, Read, Update, Delete)
- Server state management with TanStack Query
- Optimistic updates for better user experience
- React Query cache for client-side state management
- Responsive UI with Tailwind CSS
- TypeScript for type safety
- Proper error handling
- Clean project structure

## Project Structure

```
src/
├── QueryOption/         # React Query hooks and API functions
├── pages/               # Page components
├── router/              # React Router configuration
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
- Managing cache state
- Creating new items
- Updating existing items
- Deleting items
- Pagination

## Technical Details

- Uses the latest React 18 features
- Implements optimistic updates for better UX 
- TanStack Query for both data fetching and state management
- Leverages React Query's cache for client-side state
- Clean, simple components with minimal boilerplate

## Why React Query Only?

This template demonstrates how React Query can be used as a complete solution for:

1. **Data Fetching**: Easy API interactions with built-in caching
2. **State Management**: Using the Query Client cache as a state store
3. **Optimistic Updates**: Providing instant feedback while handling server communication
4. **Loading & Error States**: Built-in loading and error handling

React Query eliminates the need for additional state management libraries in many applications, resulting in:
- Less boilerplate code
- Fewer dependencies
- Simpler mental model
- Easier to maintain

For applications where server state is the primary concern, React Query provides everything you need in a single, well-designed package.
