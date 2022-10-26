import React, { Fragment } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'


const Navbar = () => {

  // Taking my state manager from the context with destructuring
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  // Your Handler Arrow Function
  const displaySubmenuHandler = (event) => {
    // Taking the text content value of every link
    const page = event.target.textContent
    // Taking the coords of every Links
    const tempBtn = event.target.getBoundingClientRect()
    console.log(page); // Verify
    console.log(tempBtn); // Verify
    // Centering the submenu div from the single link
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 2
    // Calling the open method from context
    openSubmenu(page, { center, bottom })
  }


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
            <li><button className='link-btn' onMouseOver={displaySubmenuHandler}>Products</button></li>
            <li><button className='link-btn' onMouseOver={displaySubmenuHandler}>Developers</button></li>
            <li><button className='link-btn' onMouseOver={displaySubmenuHandler}>Company</button></li>
          </ul>
          <button className='btn signin-btn'>Sign In</button>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
