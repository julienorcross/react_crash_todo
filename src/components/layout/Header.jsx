import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>To Do List</h1>
        </Link>
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/about" className="navlink">
          About
        </Link>
      </div>
    </header>
  );
}
export default Header;
