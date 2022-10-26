import React, { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  // Destructuring of global Context
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <Fragment>
      <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
        {/* sidebar */}
        <div className="sidebar">
          {/* close-btn */}
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          {/* sidebar-links */}
          <div className="sidebar-links">
            {sublinks.map((item, index) => {
              /* Destructuring of sublinks */
              const { links, page } = item
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  {/* sidebar-sublinks */}
                  <div className="sidebar-sublinks">
                    {/* Destructuring of Links */}
                    {links.map((link, index) => {
                      const { url, icon, label } = link
                      /* Return of single link */
                      return (
                        <a key={index} href={url}>{icon} {label}</a>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </aside>
    </Fragment>
  )
}

export default Sidebar
