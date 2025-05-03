import React, { useState } from 'react';
import { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation, Todo } from '../QueryOption';
import { FiPlus, FiChevronLeft, FiChevronRight, FiTrash2, FiEdit, FiCheck, FiX, FiCheckCircle, FiList, FiClock, FiTrello, FiRefreshCw } from 'react-icons/fi';
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Zustand + React Query Template</h1>
              <p className="text-xl mb-8 opacity-90">A lightweight state management approach combining Zustand's simplicity with React Query's power</p>
              <a 
                href="#todo-app" 
                className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Modern State Management</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiCheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Zustand State Management</h3>
                <p className="text-gray-600">Minimalist state management with hooks-based API and zero boilerplate.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiTrello size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">React Query Integration</h3>
                <p className="text-gray-600">Smart data fetching with built-in caching and request deduplication.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Developer Experience</h3>
                <p className="text-gray-600">Fast setup, minimal API, and excellent TypeScript support for rapid development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Management Showcase */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">This template demonstrates the elegant combination of Zustand and React Query for modern web applications.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-indigo-600">Zustand + React Query Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Minimal Bundle Size:</span> Zustand is tiny (2KB) compared to Redux
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">No Boilerplate:</span> No actions, reducers, middleware or context providers
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">First-class TypeScript:</span> Complete type safety with minimal setup
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Optimistic Updates:</span> Real-time feedback with automatic rollbacks
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-purple-600">Code Showcase</h3>
                      <div className="bg-gray-800 rounded-lg text-gray-200 p-4 text-sm font-mono overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`// Creating a Zustand store
const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  isLoading: false,
  setTodos: (todos) => set({ todos }),
  setLoading: (isLoading) => set({ isLoading })
}));

// Using the store with React Query
const todos = useTodoStore(state => state.todos);
const { mutate } = useAddTodoMutation();

// Simple, direct state access
mutate(newTodo); // Updates Zustand store`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Todo App Section */}
        <section id="todo-app" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Your Todo App</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Manage your tasks with ease using our powerful Zustand & React Query integration.</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold flex items-center">
                      <FiList className="mr-2" /> Zustand Task Manager
                    </h3>
                    <div className="flex items-center">
                      <button 
                        onClick={() => refetch()} 
                        className="bg-white bg-opacity-20 text-white font-medium py-1 px-3 rounded-lg mr-3 hover:bg-opacity-30 transition-colors flex items-center"
                      >
                        <FiRefreshCw className="mr-1" size={14} />
                        Refresh
                      </button>
                      <div className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {todos.length} Tasks
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <form
                    onSubmit={handleAddTodo}
                    className="mb-6 flex items-center"
                  >
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      className="flex-grow shadow appearance-none border border-gray-200 rounded-l-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Add a new task..."
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center transition-colors"
                    >
                      <FiPlus className="mr-2" />
                      Add
                    </button>
                  </form>

                  {todos.length > 0 ? (
                    <>
                      <div className="space-y-3">
                        {paginatedTodos.map((todo) => (
                          <div 
                            key={todo.id} 
                            className={`bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow ${
                              todo.completed ? 'bg-gray-50' : ''
                            }`}
                          >
                            {editingId === todo.id ? (
                              <div className="flex-1 flex items-center">
                                <input
                                  type="text"
                                  value={editText}
                                  onChange={(e) => setEditText(e.target.value)}
                                  className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                  autoFocus
                                />
                                <button 
                                  onClick={() => handleUpdateTodo(todo)}
                                  className="text-green-500 hover:text-green-700 p-2 rounded-full hover:bg-green-50 transition-colors"
                                >
                                  <FiCheck size={18} />
                                </button>
                                <button 
                                  onClick={cancelEditing}
                                  className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                >
                                  <FiX size={18} />
                                </button>
                              </div>
                            ) : (
                              <>
                                <div className="flex items-center flex-1">
                                  <div 
                                    className={`w-5 h-5 rounded-full border ${
                                      todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                                    } mr-3 cursor-pointer flex items-center justify-center`}
                                    onClick={() => handleToggleComplete(todo)}
                                  >
                                    {todo.completed && <FiCheck size={12} className="text-white" />}
                                  </div>
                                  <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                                    {todo.title}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <button 
                                    onClick={() => startEditing(todo)} 
                                    className="text-indigo-500 hover:text-indigo-700 p-2 rounded-full hover:bg-indigo-50 transition-colors"
                                  >
                                    <FiEdit size={16} />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteTodo(todo.id)} 
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                  >
                                    <FiTrash2 size={16} />
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex justify-center items-center">
                        <button
                          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                          disabled={page === 1}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <FiChevronLeft className="mr-1" />
                          Previous
                        </button>
                        <span className="mx-4 text-gray-600 font-medium">Page {page} of {totalPages}</span>
                        <button
                          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={page >= totalPages || totalPages === 0}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next
                          <FiChevronRight className="ml-1" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <div className="flex justify-center mb-4">
                        <FiList className="text-gray-400" size={48} />
                      </div>
                      <p className="text-gray-500 mb-4">No tasks yet. Add one to get started!</p>
                      <p className="text-gray-400 text-sm">Your tasks will appear here once you add them.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold">Zustand Task Management</h2>
                <p className="text-gray-400 mt-2">Powered by React, Zustand and React Query</p>
              </div>
              <div>
                <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Floating status indicator */}
      {isLoading && todos.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white mr-2"></div>
          Syncing...
        </div>
      )}
    </ErrorBoundary>
  );
}
