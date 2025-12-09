/**
 * Navigation Component
 * Sticky header with responsive mobile menu and auth modal
 */

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiLogIn, FiArrowRight } from 'react-icons/fi';
import Button from './Button';
import AuthModal from './AuthModal';

const Navigation = ({ currentPage = 'home', onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'workers', label: 'Workers' },
    { id: 'employers', label: 'Employers' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate?.(id);
    setIsMobileMenuOpen(false);
  };

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-dark">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className="flex items-center gap-2.5 group"
              >
                <img 
                  src="/Logo.png" 
                  alt="KaiyoZ AI Logo" 
                  className="w-20 h-20 object-contain"
                />
                <span className="font-display text-primary font-bold text-lg hidden sm:block">
                  KaiyoZ AI
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${currentPage === item.id 
                      ? 'text-secondary bg-secondary/10' 
                      : 'text-text-secondary hover:text-primary hover:bg-neutral-dark'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openAuth('login')}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                <FiLogIn className="w-4 h-4" />
                Sign In
              </button>
              <button
                onClick={() => openAuth('signup')}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-light active:scale-[0.98] transition-all duration-200"
              >
                Get Started
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-neutral-dark rounded-md transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-neutral-dark py-4 animate-slide-up">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-md text-sm font-medium
                      transition-all duration-200
                      ${currentPage === item.id 
                        ? 'bg-secondary text-white' 
                        : 'text-text-secondary hover:bg-neutral-dark hover:text-primary'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-neutral-dark mt-3 pt-4 px-4 flex flex-col gap-3">
                  <button
                    onClick={() => openAuth('login')}
                    className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuth('signup')}
                    className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-all duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navigation;
