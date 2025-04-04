import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SayHi
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#team" className="hover:text-blue-500 transition-colors">Team</a>
            <a href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-blue-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;