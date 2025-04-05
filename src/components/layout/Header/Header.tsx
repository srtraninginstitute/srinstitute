import React from 'react';
import Button from '../../shared/Button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-2xl font-bold text-primary-600">Your Logo</div>
            <nav className="hidden md:flex items-center space-x-8">
              <h1>Welcome to SR Software Institute</h1>
              <h2>Success and Reponsable</h2>
              <h3>We are a software development company that specializes in creating custom software solutions for businesses of all sizes.</h3>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Products</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Resources</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 