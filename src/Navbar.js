import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    /* nav */
    <nav className='nav' onMouseOver={handleSubmenu}>
      {/* nav-center */}
      <div className='nav-center'>
        {/* nav-header */}
        <div className='nav-header'>
          {/* nav-logo */}
          <img src={logo} className='nav-logo' alt='' />
          {/* btn toggle-btn */}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        {/* nav-links */}
        <ul className='nav-links'>
          {/* link-btn */}
          <li><button className='link-btn' onMouseOver={displaySubmenu}>products</button></li>
          {/* link-btn */}
          <li><button className='link-btn' onMouseOver={displaySubmenu}>developers</button></li>
          {/* link-btn */}
          <li><button className='link-btn' onMouseOver={displaySubmenu}>company</button></li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
