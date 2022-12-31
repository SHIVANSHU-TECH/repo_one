import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
        <div className="logo">
            Company
        </div>
        <div className="display-menu">
            <NavLink className='menu' to={'/'}>Home</NavLink>
            <NavLink className='menu' to={'/service'}>services</NavLink>
            <NavLink className='menu' to={'/about'}>about</NavLink>
            <NavLink className='menu' to={'/contact'}>Contact</NavLink>

        </div>
    </header>
  );
}

export default Navbar;
