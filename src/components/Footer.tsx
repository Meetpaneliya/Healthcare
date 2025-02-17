import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Youtube
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-background-dark border-t border-border dark:border-border-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-4">VitaLuxe</h3>
            <p className="mb-4 text-foreground/80 dark:text-foreground-dark/80">
              Pioneering IV therapy solutions in collaboration with IIT Delhi, bringing cutting-edge wellness to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-foreground/60 dark:text-foreground-dark/60 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-foreground/60 dark:text-foreground-dark/60 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-foreground/60 dark:text-foreground-dark/60 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-foreground/60 dark:text-foreground-dark/60 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-foreground/60 dark:text-foreground-dark/60 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/segments" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                <MapPin className="h-5 w-5 mr-2 text-primary dark:text-primary-dark" />
                <p>IIT Delhi, Hauz Khas</p>
              </li>
              <li className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                <Phone className="h-5 w-5 mr-2 text-primary dark:text-primary-dark" />
                <p>+91 98765 43210</p>
              </li>
              <li className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
                <Mail className="h-5 w-5 mr-2 text-primary dark:text-primary-dark" />
                <p>info@vitaluxe.in</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark mb-4">Newsletter</h3>
            <p className="mb-4 text-foreground/80 dark:text-foreground-dark/80">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
              />
              <button type="submit" className="btn w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border dark:border-border-dark text-center text-foreground/60 dark:text-foreground-dark/60">
          <p>&copy; 2025 VitaLuxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};