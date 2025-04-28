import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, getTodos } from "./function";


export interface PaginationParams {
  _page: number;
  _limit: number;
}



const useTodosQuery = (params: PaginationParams) => {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: () => getTodos(params),
  });
};

const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export { useTodosQuery, useAddTodoMutation };
