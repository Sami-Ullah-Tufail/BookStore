import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => (
  <div>
    <div>
      <NavLink className="linksdev" to="/">Home</NavLink>
      <NavLink className="linksdev" to="/categories">Catagories</NavLink>
    </div>
    <div className="Viewer">
      <Outlet className="display" />
    </div>
  </div>

);

export default Nav;
