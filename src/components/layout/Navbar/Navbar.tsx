import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-700">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-white hover:text-primary-200 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/about" className="text-primary-100 hover:text-white px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="/services" className="text-primary-100 hover:text-white px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="/contact" className="text-primary-100 hover:text-white px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-primary-700`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block text-white hover:bg-primary-600 px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="/about" className="block text-primary-100 hover:bg-primary-600 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/services" className="block text-primary-100 hover:bg-primary-600 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="/contact" className="block text-primary-100 hover:bg-primary-600 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 