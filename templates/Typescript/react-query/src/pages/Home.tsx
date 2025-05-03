import React, { useState } from 'react';
import { useTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation, Todo } from '../QueryOption';
import { FiPlus, FiChevronLeft, FiChevronRight, FiTrash2, FiEdit, FiCheck, FiX, FiCheckCircle, FiList, FiClock, FiTrello } from 'react-icons/fi';
import ErrorBoundary from '../utils/ErrorBoundary';
import { useAppSelector } from '../store/hooks';
import { selectTodos } from '../store/slices/todoSlice';

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // React Query hooks - now manage Redux state internally
  const { isLoading } = useTodosQuery({ _page: 1, _limit: 100 });
  const { mutate: addTodoMutation } = useAddTodoMutation();
  const { mutate: updateTodoMutation } = useUpdateTodoMutation();
  const { mutate: deleteTodoMutation } = useDeleteTodoMutation();

  // Get todos directly from Redux
  const todos = useAppSelector(selectTodos);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTodos = todos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(todos.length / limit);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    // Just call the mutation - Redux updating is handled by the hook
    addTodoMutation(newTodo);
    setNewTodo('');
  };

  const handleUpdateTodo = (todo: Todo) => {
    if (editingId === todo.id && editText.trim()) {
      const updatedTodo = { ...todo, title: editText };
      
      // Just call the mutation - Redux updating is handled by the hook
      updateTodoMutation(updatedTodo);
      setEditingId(null);
      setEditText('');
    }
  };

  const handleToggleComplete = (todo: Todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    
    // Just call the mutation - Redux updating is handled by the hook
    updateTodoMutation(updatedTodo);
  };

  const handleDeleteTodo = (id: number) => {
    // Just call the mutation - Redux updating is handled by the hook
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

  if (isLoading) {
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
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Redux + React Query Template</h1>
              <p className="text-xl mb-8 opacity-90">Combining the power of Redux for UI state with React Query for server state</p>
              <a 
                href="#todo-app" 
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Best of Both Worlds</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiCheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Redux State Management</h3>
                <p className="text-gray-600">Powerful global state management with Redux for complex UI state requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiTrello size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Fetching with React Query</h3>
                <p className="text-gray-600">Efficient server state management with React Query's caching and auto-refetching.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Seamless Integration</h3>
                <p className="text-gray-600">React Query updates Redux state automatically, keeping everything in sync.</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Management Showcase */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">This template demonstrates how to effectively combine Redux and React Query for optimal state management.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-blue-600">Template Architecture</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Redux for UI State:</span> Keeps application state in a central store
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">React Query Hooks:</span> Handle API calls and data synchronization
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Automatic Synchronization:</span> Query hooks dispatch Redux actions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">TypeScript Integration:</span> Fully typed for maximum developer productivity
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-indigo-600">Code Showcase</h3>
                      <div className="bg-gray-800 rounded-lg text-gray-200 p-4 text-sm font-mono overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`// React Query updates Redux automatically
const { mutate: addTodo } = useAddTodoMutation();

// Access Redux state with selectors
const todos = useAppSelector(selectTodos);

// React Query mutation - internally 
// dispatches Redux actions
addTodo(newTodoText);

// Redux slice handles the state updates
// while React Query manages API calls`}
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
                <p className="text-gray-600 max-w-2xl mx-auto">Manage your tasks with ease using our powerful React Query with Redux integration.</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold flex items-center">
                      <FiList className="mr-2" /> Redux Task Manager
                    </h3>
                    <div className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                      {todos.length} Tasks
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
                      className="flex-grow shadow appearance-none border border-gray-200 rounded-l-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Add a new task..."
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center transition-colors"
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
                                  className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                    className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"
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
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <FiChevronLeft className="mr-1" />
                          Previous
                        </button>
                        <span className="mx-4 text-gray-600 font-medium">Page {page} of {totalPages}</span>
                        <button
                          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                          disabled={page >= totalPages}
                          className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                <h2 className="text-xl font-bold">Redux Task Management</h2>
                <p className="text-gray-400 mt-2">Powered by React, Redux and React Query</p>
              </div>
              <div>
                <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
