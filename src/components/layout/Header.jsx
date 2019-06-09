import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>To Do List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
}
export default Header;