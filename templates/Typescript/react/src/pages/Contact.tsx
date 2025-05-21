import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">Get in touch with our team</p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                        <FiMail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">contact@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                        <FiPhone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                        <FiMapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">
                          123 Tech Street<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Office Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                  
                  <form>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 