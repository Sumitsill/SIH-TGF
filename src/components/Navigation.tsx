// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Shield, Menu, X, Upload, LogIn } from 'lucide-react';

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
//             <Shield className="h-8 w-8 text-cyan-400" />
//             <span className="text-xl font-bold"> Pratidwandhi</span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   isActive('/') 
//                     ? 'bg-cyan-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/services"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   isActive('/services') 
//                     ? 'bg-cyan-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                 }`}
//               >
//                 Services
//               </Link>
//               <Link
//                 to="/about"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   isActive('/about') 
//                     ? 'bg-cyan-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                 }`}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/contact"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                   isActive('/contact') 
//                     ? 'bg-cyan-600 text-white' 
//                     : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                 }`}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="/upload"
//               className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
//             >
//               <Upload className="h-4 w-4" />
//               <span>📂 Upload Case</span>
//             </Link>
//             {/* <Link
//               to="/login"
//               className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//             >
//               <LogIn className="h-4 w-4" />
//               <span>🔑 Login</span>
//             </Link> */}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
//             <Link
//               to="/"
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive('/') 
//                   ? 'bg-cyan-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/services"
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive('/services') 
//                   ? 'bg-cyan-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               to="/about"
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive('/about') 
//                   ? 'bg-cyan-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About Us
//             </Link>
//             <Link
//               to="/contact"
//               className={`block px-3 py-2 rounded-md text-base font-medium ${
//                 isActive('/contact') 
//                   ? 'bg-cyan-600 text-white' 
//                   : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <div className="border-t border-gray-700 pt-4 pb-3">
//               <div className="flex flex-col space-y-3">
//                 <Link
//                   to="/upload"
//                   className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <Upload className="h-4 w-4" />
//                   <span>📂 Upload Case</span>
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   <LogIn className="h-4 w-4" />
//                   <span>🔑 Login</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Upload, LogIn, Home, Settings, Info, Phone, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
// import AuthModal from './AuthModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">Pratidwandhi</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-cyan-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right side - CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/upload"
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Upload className="h-4 w-4" />
                <span>📂 Upload Case</span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <User size={16} className="text-cyan-600" />
                    </div>
                    <span className="font-medium text-white">{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <motion.button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogIn className="h-4 w-4" />
                  <span>🔑 Login</span>
                </motion.button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-slate-800"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all ${
                        isActive(item.path)
                          ? 'bg-cyan-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/upload"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Upload className="h-4 w-4" />
                      <span>📂 Upload Case</span>
                    </Link>
                    
                    {user ? (
                      <div className="space-y-2">
                        <Link
                          to="/profile"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                        >
                          <User size={20} />
                          <span className="font-medium">{user.name}</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-3 text-gray-300 hover:text-white transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <motion.button
                        onClick={() => {
                          setIsAuthModalOpen(true);
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <LogIn className="h-4 w-4" />
                        <span>🔑 Login</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      /> */}
    </>
  );
}