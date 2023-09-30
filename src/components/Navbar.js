import React from 'react';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="nav-bar">
      <h1 className="header">Bookstore CMS</h1>
      <ul>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Navbar;
