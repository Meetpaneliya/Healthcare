import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors">
      <header className="fixed w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <Droplets className="h-8 w-8 text-primary dark:text-primary-dark" />
              <span className="text-xl font-bold text-primary dark:text-primary-dark">VitaLuxe</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                Home
              </Link>
              <Link to="/segments" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                Services
              </Link>
              <Link to="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                About Us
              </Link>
              <Link to="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                Testimonials
              </Link>
              <Link to="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className="py-2 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/segments" 
                  className="py-2 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="#" 
                  className="py-2 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="#" 
                  className="py-2 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  to="#" 
                  className="py-2 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};