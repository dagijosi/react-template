import { FiUsers, FiGlobe, FiRefreshCw } from 'react-icons/fi';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl opacity-90">Learn more about our team and mission</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  We're a team of passionate developers dedicated to creating high-quality React templates that help businesses and developers build 
                  beautiful, functional web applications quickly and efficiently.
                </p>
                <p className="text-gray-600 mb-6">
                  With years of experience in web development, we understand the challenges that developers face when starting new projects.
                  Our templates aim to eliminate the initial setup hurdles and provide a solid foundation for your next big idea.
                </p>
                <p className="text-gray-600">
                  We believe in clean code, modern design principles, and creating developer-friendly solutions that scale.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Developer Experience</h3>
                <p className="text-gray-600">
                  We prioritize creating tools and templates that make developers' lives easier and more productive.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiGlobe size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Accessibility</h3>
                <p className="text-gray-600">
                  We're committed to building templates that follow accessibility best practices for inclusive web experiences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-purple-100 text-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FiRefreshCw size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  We constantly stay updated with the latest technologies and best practices in React development.
                </p>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                Have questions or feedback about our templates? We'd love to hear from you!
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 