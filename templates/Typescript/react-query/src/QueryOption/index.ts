import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos, updateTodo, deleteTodo } from "./function";
import { useAppDispatch } from "../store/hooks";
import { setTodos, addTodo as addTodoAction, updateTodo as updateTodoAction, deleteTodo as deleteTodoAction } from "../store/slices/todoSlice";
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

const useTodosQuery = (params: PaginationParams) => {
  const dispatch = useAppDispatch();
  
  const result = useQuery({
    queryKey: ['todos', params],
    queryFn: () => getTodos(params),
  });
  
  // Use useEffect to sync the data with Redux when it's available
  useEffect(() => {
    if (result.data) {
      dispatch(setTodos(result.data));
    }
  }, [result.data, dispatch]);
  
  return result;
};

const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: addTodo,
    // Optimistic update in Redux before the API call completes
    onMutate: async (title) => {
      // Create a temporary todo with a temporary ID
      const tempTodo = {
        id: Date.now(), // Temporary ID
        title,
        completed: false,
      };
      
      // Update Redux store optimistically
      dispatch(addTodoAction(tempTodo));
      
      return { tempTodo };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: updateTodo,
    // Optimistic update in Redux before the API call completes
    onMutate: async (updatedTodo) => {
      // Update Redux store optimistically
      dispatch(updateTodoAction(updatedTodo));
      
      return { updatedTodo };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: deleteTodo,
    // Optimistic update in Redux before the API call completes
    onMutate: async (id) => {
      // Update Redux store optimistically
      dispatch(deleteTodoAction(id));
      
      return { id };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation };
