import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header firstname="Ryoga" />
      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;