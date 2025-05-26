import React, { memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  firstname: string;
}

const Header: React.FC<Props> = memo(({ firstname }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/blog" className="hover:text-blue-200">
            Blog
          </Link>
        </nav>
        <div className="text-sm">
          Welcome, {firstname}
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;