import React, { Fragment } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {

  // Taking my state manager from the context with destructuring
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  return (
    <Fragment>
      {/* nav */}
      <nav className="nav">
        {/* nav-center */}
        <div className='nav-center'>
          {/* nav-header */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="Logo Stripe" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          {/* nav-links */}
          <ul className="nav-links">
            <li><button className='link-btn'>Products</button></li>
            <li><button className='link-btn'>Developers</button></li>
            <li><button className='link-btn'>Company</button></li>
          </ul>
          <button className='btn signin-btn'>Sign In</button>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
