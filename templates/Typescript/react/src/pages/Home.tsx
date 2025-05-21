import { FiCheckCircle, FiTrello, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Home() {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut" 
            }
        },
        hover: { 
            y: -10,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { 
                type: "spring", 
                stiffness: 300 
            }
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05, 
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            transition: { type: "spring", stiffness: 400 }
        },
        tap: { scale: 0.95 }
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Section */}
            <motion.header 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1 
                            className="text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            React Template
                        </motion.h1>
                        <motion.p 
                            className="text-xl mb-8 opacity-90"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            A modern, responsive React application template
                        </motion.p>
                        <motion.a 
                            href="#features" 
                            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            variants={buttonVariants}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Get Started
                        </motion.a>
                    </div>
                </div>
            </motion.header>

            {/* Features Section */}
            <section id="features" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-3xl font-bold text-center mb-12 text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Key Features
                    </motion.h2>
                    
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div 
                                className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiCheckCircle size={24} />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Feature One</h3>
                            <p className="text-gray-600">Implement modern, responsive design with Tailwind CSS for a beautiful user interface.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div 
                                className="bg-indigo-100 text-indigo-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiTrello size={24} />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Feature Two</h3>
                            <p className="text-gray-600">Build with TypeScript for enhanced developer experience and code reliability.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div 
                                className="bg-purple-100 text-purple-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FiClock size={24} />
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Feature Three</h3>
                            <p className="text-gray-600">Optimized performance and easy to customize for your specific project needs.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">This template gives you everything you need to build modern React applications.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <motion.h3 
                                            className="text-xl font-bold mb-4 text-blue-600"
                                            custom={1}
                                            variants={fadeIn}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            Template Architecture
                                        </motion.h3>
                                        <motion.ul className="space-y-3">
                                            {[
                                                { title: "Modern React:", text: "Built with the latest React features" },
                                                { title: "Tailwind CSS:", text: "Utility-first CSS framework" },
                                                { title: "TypeScript:", text: "Type safety for your codebase" },
                                                { title: "Component Structure:", text: "Well-organized component architecture" }
                                            ].map((item, index) => (
                                                <motion.li 
                                                    key={index}
                                                    className="flex items-start"
                                                    custom={index + 2}
                                                    variants={fadeIn}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                    </div>
                                                    <div>
                                                        <span className="font-medium">{item.title}</span> {item.text}
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                    >
                                        <h3 className="text-xl font-bold mb-4 text-indigo-600">Code Showcase</h3>
                                        <div className="bg-gray-800 rounded-lg text-gray-200 p-4 text-sm font-mono overflow-x-auto">
                                            <pre className="whitespace-pre-wrap">
{`import React from 'react';

// Modern React components
function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
}

// Tailwind styling for rapid development
// TypeScript for enhanced type safety`}
                                            </pre>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-white">
                <motion.div 
                    className="container mx-auto px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2 
                            className="text-3xl font-bold mb-6 text-gray-800"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Ready to Get Started?
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Build your next project with our modern React template
                        </motion.p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.a 
                                href="#" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, boxShadow: "0px 7px 15px rgba(59, 130, 246, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Documentation
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05, boxShadow: "0px 7px 15px rgba(0, 0, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                GitHub Repository
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="flex flex-col md:flex-row justify-between items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6 md:mb-0">
                            <motion.h2 
                                className="text-xl font-bold"
                                whileHover={{ scale: 1.05 }}
                            >
                                React Template
                            </motion.h2>
                            <p className="text-gray-400 mt-2">Built with modern web technologies</p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
}