import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

function App() {
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />
      {/* Hero */}
      <Hero />
      {/* Submenu */}
      <Submenu />
    </Fragment>
  )
}

export default App
