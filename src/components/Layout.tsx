import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/segments', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark transition-all duration-300">
      <header className="fixed w-full bg-background/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark z-50 transition-all duration-300">
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors ${
                    isActive(link.path) ? 'text-primary dark:text-primary-dark font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-surface-hover dark:hover:bg-surface-hover-dark transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground dark:text-foreground-dark" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground dark:text-foreground-dark" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background dark:bg-background-dark border-t border-border dark:border-border-dark">
            <div className="container mx-auto px-4 py-2">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors ${
                      isActive(link.path) ? 'text-primary dark:text-primary-dark font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </header>

      {children}
    </div>
  );
};