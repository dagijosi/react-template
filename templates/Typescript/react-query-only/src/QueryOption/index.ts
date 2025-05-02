import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, updateTodo, deleteTodo } from "./function";
import { useEffect } from "react";

export interface PaginationParams {
  _page: number;
  _limit: number;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Key for storing all todos in the query cache
export const TODOS_QUERY_KEY = 'todos';

// Custom hook to access todos from the query cache
export const useTodos = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<Todo[]>([TODOS_QUERY_KEY]) || [];
};

// Query hook for fetching todos
const useTodosQuery = (params: PaginationParams) => {
  return useQuery({
    queryKey: [TODOS_QUERY_KEY, params],
    queryFn: () => getTodos(params),
  });
};

const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    // Optimistic update directly in React Query cache
    onMutate: async (title) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>([TODOS_QUERY_KEY]) || [];
      
      // Create a temporary todo with a temporary ID
      const tempTodo = {
        id: Date.now(), // Temporary ID
        title,
        completed: false,
      };
      
      // Optimistically update the cache
      queryClient.setQueryData<Todo[]>([TODOS_QUERY_KEY], old => {
        return [...(old || []), tempTodo];
      });
      
      // Return a context object with the snapshot value
      return { previousTodos };
    },
    onError: (_err, _newTodo, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      queryClient.setQueryData([TODOS_QUERY_KEY], context?.previousTodos);
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    // Optimistic update directly in React Query cache
    onMutate: async (updatedTodo) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>([TODOS_QUERY_KEY]) || [];
      
      // Get any existing queries data
      const existingTodosData = queryClient.getQueriesData<Todo[]>({ 
        queryKey: [TODOS_QUERY_KEY] 
      });
      
      // Optimistically update all queries with the todos key
      for (const [queryKey, data] of existingTodosData) {
        if (data) {
          queryClient.setQueryData(queryKey, data.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
          ));
        }
      }
      
      // Return a context with the previous value
      return { previousTodos, existingTodosData };
    },
    onError: (_err, _updatedTodo, context) => {
      // If the mutation fails, restore all query data
      if (context?.existingTodosData) {
        for (const [queryKey, data] of context.existingTodosData) {
          queryClient.setQueryData(queryKey, data);
        }
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    // Optimistic update directly in React Query cache
    onMutate: async (id) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData<Todo[]>([TODOS_QUERY_KEY]) || [];
      
      // Get any existing queries data
      const existingTodosData = queryClient.getQueriesData<Todo[]>({ 
        queryKey: [TODOS_QUERY_KEY] 
      });
      
      // Optimistically update all queries with the todos key
      for (const [queryKey, data] of existingTodosData) {
        if (data) {
          queryClient.setQueryData(queryKey, data.filter(todo => todo.id !== id));
        }
      }
      
      // Return a context with the previous value
      return { previousTodos, existingTodosData };
    },
    onError: (_err, _id, context) => {
      // If the mutation fails, restore all query data
      if (context?.existingTodosData) {
        for (const [queryKey, data] of context.existingTodosData) {
          queryClient.setQueryData(queryKey, data);
        }
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

export { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation };
