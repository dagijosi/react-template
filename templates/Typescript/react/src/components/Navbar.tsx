import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FiCode, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if the current path matches the link path
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
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

  const logoVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95
    }
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/features", text: "Features" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial="normal"
            whileHover="hover"
            variants={logoVariants}
          >
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-md"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <FiCode className="text-white text-xl" />
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">React Template</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.to) 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Get Started Button (Desktop) */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get Started
            </motion.a>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              <AnimatePresence initial={false} mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.to}
                  variants={mobileNavItemVariants}
                  custom={index}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(link.to) 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="pt-2"
                variants={mobileNavItemVariants}
              >
                <motion.a 
                  href="#" 
                  className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 