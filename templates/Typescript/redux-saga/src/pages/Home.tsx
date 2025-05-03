import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { fetchData } from '../features/example/exampleSlice'; // Import the action creator
import ErrorBoundary from '../utils/ErrorBoundary';
import { FiHome, FiCode, FiDatabase, FiCpu, FiRefreshCw, FiCheckCircle, FiX, FiCodesandbox, FiGitMerge } from 'react-icons/fi'; // Import icons

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.example
  );

  const handleFetchData = async () => {
    dispatch(fetchData()); // Dispatch the action creator
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Redux Saga Template</h1>
              <p className="text-xl mb-8 opacity-90">Advanced asynchronous flow management with Redux Saga middleware</p>
              <a 
                href="#demo-app" 
                className="inline-block bg-white text-red-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See the Demo
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Redux Saga?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 text-red-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiCpu size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Generator Functions</h3>
                <p className="text-gray-600">Use JavaScript generator functions to create complex async flows in a readable way.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiGitMerge size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Complex Flow Control</h3>
                <p className="text-gray-600">Manage race conditions, debouncing, parallel tasks, and cancellation with ease.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiCodesandbox size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Testable Side Effects</h3>
                <p className="text-gray-600">Declarative effects make testing asynchronous flows straightforward and reliable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* State Management Showcase */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">How Redux Saga Works</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">This template demonstrates the power of Redux Saga for handling complex asynchronous flows.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-red-600">Redux Saga Architecture</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Action-based:</span> Sagas listen for Redux actions to trigger async workflows
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Effect Model:</span> Use declarative effects like <code>call</code>, <code>put</code>, and <code>select</code>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">Advanced Patterns:</span> Implement throttling, debouncing, and retry logic
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                          </div>
                          <div>
                            <span className="font-medium">TypeScript Integration:</span> Full type safety across your state management
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-orange-600">Code Showcase</h3>
                      <div className="bg-gray-800 rounded-lg text-gray-200 p-4 text-sm font-mono overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
{`// Example Redux Saga code
function* fetchDataSaga() {
  try {
    // Show loading state
    yield put(setLoading(true));
    
    // Call API with automatic cancellation
    // if a new request comes in
    const data = yield call(api.fetchData);
    
    // Update Redux state with result
    yield put(fetchSuccess(data));
  } catch (error) {
    // Handle errors declaratively
    yield put(fetchError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo App Section */}
        <section id="demo-app" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Redux Saga Demo</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Experience Redux Saga in action with this data fetching example.</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold flex items-center">
                      <FiHome className="mr-2" /> Saga Data Fetcher
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <button
                    onClick={handleFetchData}
                    disabled={loading}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mb-8"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                        Fetching Data...
                      </>
                    ) : (
                      <>
                        <FiRefreshCw className="mr-2" />
                        Fetch Data
                      </>
                    )}
                  </button>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Data Fetch Status:</h4>
                    
                    {loading && (
                      <div className="flex items-center text-yellow-600 bg-yellow-50 p-4 rounded-lg">
                        <div className="animate-spin mr-3 h-5 w-5 text-yellow-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
                        <p>Redux Saga is handling the API request...</p>
                      </div>
                    )}
                    
                    {error && (
                      <div className="flex items-start text-red-600 bg-red-50 p-4 rounded-lg">
                        <FiX className="mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="font-semibold">Saga caught an error:</p>
                          <p className="mt-1">{error}</p>
                        </div>
                      </div>
                    )}
                    
                    {data && !loading && !error && (
                      <div className="flex items-start text-green-600 bg-green-50 p-4 rounded-lg">
                        <FiCheckCircle className="mt-1 mr-3 flex-shrink-0" size={18} />
                        <div>
                          <p className="font-semibold">Saga successfully fetched data:</p>
                          <pre className="mt-3 text-sm p-3 bg-white border border-green-100 rounded-md overflow-x-auto text-gray-800">
                            {JSON.stringify(data, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}
                    
                    {!loading && !error && !data && (
                      <div className="text-center py-8 text-gray-500">
                        <FiDatabase className="mx-auto mb-4" size={36} />
                        <p>Click the button to dispatch a Redux action and trigger the saga.</p>
                      </div>
                    )}
                  </div>
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
                <h2 className="text-xl font-bold">Redux Saga Template</h2>
                <p className="text-gray-400 mt-2">Powered by React, Redux, and Redux Saga</p>
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
};

export default Home;
