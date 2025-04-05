import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <div className="flex-none">
        <Header />
        <Navbar />
      </div>
      <main className="flex-1 w-full py-8">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 