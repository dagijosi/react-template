import { handleApiErrors } from "../utils/handleApiErrors";
import { PaginationParams } from "./index";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export const getTodos = async (params: PaginationParams) => {
  try {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value); // make sure value is a string
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?' + queryString);
    const data: Todo[] = await response.json();
    return data;
  } catch (error: any) {
    handleApiErrors(error, 'Failed to fetch todos');
    throw error;
  }
};



 export async function addTodo(title: string) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({ title, completed: false }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      return data;
    } catch (error: any) {
      handleApiErrors(error, 'Failed to add todo');
      throw error; // Re-throw so react-query can catch it
    }
  }
