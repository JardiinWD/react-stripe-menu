import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'
const Sidebar = () => {
  /* Importing from useContext */
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    /* isSidebarOpen */
    <div className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      {/* sidebar */}
      <aside className='sidebar'>
        {/* close-btn */}
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        {/* sidebar-links */}
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                {/* sidebar-sublinks */}
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}> {icon}{label}</a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
