import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="nav-container">
      <h1 className="header">Bookstore CMS</h1>
      <ul className="nav-links">
        <NavLink className="first" to="/">BOOKS</NavLink>
        <NavLink className="soc" to="/categories">CATEGORIES</NavLink>
      </ul>
      <div className="user-profile"><i className="fa-solid fa-user user-icon" /></div>
    </nav>
    <div>
      <Outlet />
    </div>
  </div>
);

export default Navbar;
