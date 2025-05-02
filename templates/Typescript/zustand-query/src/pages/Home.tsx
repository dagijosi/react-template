import React, { useState } from 'react';
import { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation, Todo } from '../QueryOption';
import { FiPlus, FiChevronLeft, FiChevronRight, FiTrash2, FiEdit, FiCheck, FiX } from 'react-icons/fi';
import ErrorBoundary from '../utils/ErrorBoundary';
import { useTodoStore } from '../store/todoStore';

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // Get state from Zustand
  const todos = useTodoStore(state => state.todos);
  const isLoading = useTodoStore(state => state.isLoading);
  
  // React Query hooks for data fetching and mutations
  const { refetch } = useTodosQuery({ _page: 1, _limit: 100 });
  const { mutate: addTodoMutation } = useAddTodoMutation();
  const { mutate: updateTodoMutation } = useUpdateTodoMutation();
  const { mutate: deleteTodoMutation } = useDeleteTodoMutation();

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTodos = todos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(todos.length / limit);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    // Add todo - optimistic update is handled in the mutation hook
    addTodoMutation(newTodo);
    setNewTodo('');
  };

  const handleUpdateTodo = (todo: Todo) => {
    if (editingId === todo.id && editText.trim()) {
      const updatedTodo = { ...todo, title: editText };
      
      // Update todo - optimistic update is handled in the mutation hook
      updateTodoMutation(updatedTodo);
      setEditingId(null);
      setEditText('');
    }
  };

  const handleToggleComplete = (todo: Todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    
    // Update todo - optimistic update is handled in the mutation hook
    updateTodoMutation(updatedTodo);
  };

  const handleDeleteTodo = (id: number) => {
    // Delete todo - optimistic update is handled in the mutation hook
    deleteTodoMutation(id);
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  if (isLoading && todos.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-2xl font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Todo App with Zustand & React Query</h2>
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => refetch()} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
          >
            Refresh Data
          </button>
        </div>
        
        <form
          onSubmit={handleAddTodo}
          className="mt-4 flex items-center mb-6"
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            placeholder="Add a todo"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
          >
            <FiPlus className="mr-2" />
            Add
          </button>
        </form>

        {todos.length > 0 ? (
          <>
            <ul className="space-y-3">
              {paginatedTodos.map((todo) => (
                <li 
                  key={todo.id} 
                  className={`bg-white shadow-md rounded-md p-4 flex items-center justify-between ${
                    todo.completed ? 'bg-gray-100' : ''
                  }`}
                >
                  {editingId === todo.id ? (
                    <div className="flex-1 flex items-center">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mr-2"
                        autoFocus
                      />
                      <button 
                        onClick={() => handleUpdateTodo(todo)}
                        className="text-green-500 hover:text-green-700 mx-1"
                      >
                        <FiCheck size={18} />
                      </button>
                      <button 
                        onClick={cancelEditing}
                        className="text-red-500 hover:text-red-700 mx-1"
                      >
                        <FiX size={18} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center flex-1">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleToggleComplete(todo)}
                          className="mr-3 h-4 w-4"
                        />
                        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                          {todo.title}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <button 
                          onClick={() => startEditing(todo)} 
                          className="text-blue-500 hover:text-blue-700 mx-1"
                        >
                          <FiEdit size={18} />
                        </button>
                        <button 
                          onClick={() => handleDeleteTodo(todo.id)} 
                          className="text-red-500 hover:text-red-700 mx-1"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center items-center">
              <button
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline flex items-center disabled:opacity-50"
              >
                <FiChevronLeft className="mr-2" />
                Previous
              </button>
              <span className="mx-4">{page} of {totalPages}</span>
              <button
                onClick={() => setPage(prev => prev + 1)}
                disabled={page >= totalPages || totalPages === 0}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline flex items-center disabled:opacity-50"
              >
                Next
                <FiChevronRight className="ml-2" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No todos yet. Add one to get started!</p>
          </div>
        )}
        
        {isLoading && todos.length > 0 && (
          <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">
            Syncing...
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}
