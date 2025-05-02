import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, updateTodo, deleteTodo } from "./function";
import { useTodoStore } from "../store/todoStore";
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

// Query hook for fetching todos
const useTodosQuery = (params: PaginationParams) => {
  const setTodos = useTodoStore((state: any) => state.setTodos);
  const setLoading = useTodoStore((state: any) => state.setLoading);
  const setError = useTodoStore((state: any) => state.setError);
  
  const result = useQuery({
    queryKey: [TODOS_QUERY_KEY, params],
    queryFn: () => getTodos(params),
  });
  
  // Handle success with useEffect
  useEffect(() => {
    if (result.data) {
      setTodos(result.data);
    }
  }, [result.data, setTodos]);
  
  // Handle error with useEffect
  useEffect(() => {
    if (result.error instanceof Error) {
      setError(result.error.message);
    }
  }, [result.error, setError]);
  
  // Sync loading state with Zustand
  useEffect(() => {
    setLoading(result.isLoading || result.isFetching);
  }, [result.isLoading, result.isFetching, setLoading]);
  
  return result;
};

const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  const addTodoToStore = useTodoStore((state: any) => state.addTodo);

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (title) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Create a temporary todo with a temporary ID
      const tempTodo = {
        id: Date.now(), // Temporary ID
        title,
        completed: false,
      };
      
      // Update Zustand store (optimistic update)
      addTodoToStore(tempTodo);
      
      return { tempTodo };
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const updateTodoInStore = useTodoStore((state: any) => state.updateTodo);

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Update Zustand store (optimistic update)
      updateTodoInStore(updatedTodo);
      
      return { updatedTodo };
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const deleteTodoFromStore = useTodoStore((state: any) => state.deleteTodo);

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [TODOS_QUERY_KEY] });
      
      // Update Zustand store (optimistic update)
      deleteTodoFromStore(id);
      
      return { id };
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries({ queryKey: [TODOS_QUERY_KEY] });
    },
  });
};

export { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation };
