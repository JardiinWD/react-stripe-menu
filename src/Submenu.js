import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, page: { page, links }, location, } = useGlobalContext()
  const container = useRef(null)
  // useState method for the columns
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    // Setting the columns to col-2
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    if (links.length === 3) setColumns('col-3')
    if (links.length > 3) setColumns('col-4')

  }, [page, location, links])


  return (
    /* isSubmenuOpen */
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        {/* submenu-center */}
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link
            return (
              <a key={index} href={url}> {icon} {label} </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
