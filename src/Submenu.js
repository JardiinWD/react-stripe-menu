import React, { useState, useRef, useEffect, Fragment } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {

  // Destructuring of global Context and take isSubOpen
  const { isSubmenuOpen, location } = useGlobalContext()
  // Setting a container with useRef
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    // Taking the coords of location
    const { center, bottom } = location
    // Setting the coords for the submenu
    submenu.style.left = `${center}px` // Centered to single link
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <Fragment>
      <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
        Submenu
      </aside>
    </Fragment>
  )
}

export default Submenu
