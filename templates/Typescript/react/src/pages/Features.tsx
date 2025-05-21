import { FiCode, FiPackage, FiLayout, FiLayers } from 'react-icons/fi';

export default function Features() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Features Overview</h1>
            <p className="text-xl opacity-90">Explore the powerful features of our React template</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Built with Modern Technologies</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Our template combines the best tools and libraries in the React ecosystem to provide you with a solid foundation for your next project.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiCode size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">React + TypeScript</h3>
                <p className="text-gray-600 mb-4">
                  Leverage the power of TypeScript for type safety, better tooling, and enhanced developer experience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Static type checking
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Better IDE support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Improved code quality
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiLayout size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Tailwind CSS</h3>
                <p className="text-gray-600 mb-4">
                  Build beautiful user interfaces quickly with the utility-first CSS framework.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Responsive design out of the box
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Customizable design system
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    No need to write custom CSS
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiPackage size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">React Router</h3>
                <p className="text-gray-600 mb-4">
                  Implement navigation with the standard routing library for React applications.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Declarative routing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Nested routes support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Dynamic route matching
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <FiLayers size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Component Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Well-organized component structure for better maintainability and reusability.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Reusable components
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Logical folder structure
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Separation of concerns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Explore our documentation to learn more about these features.</p>
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 