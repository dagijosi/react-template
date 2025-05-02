import { create } from 'zustand';
import { Todo } from '../QueryOption';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  isLoading: false,
  error: null,
  
  // Setters
  setTodos: (todos) => set({ todos }),
  
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo]
  })),
  
  updateTodo: (updatedTodo) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
  })),
  
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error })
}));

// Selector helpers
export const selectTodos = (state: TodoState) => state.todos;
export const selectIsLoading = (state: TodoState) => state.isLoading;
export const selectError = (state: TodoState) => state.error; 