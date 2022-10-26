import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
function App() {
  return (
    <Fragment>
      {/* Navbar Component */}
      <Navbar />
      {/* Sidebar Component */}
      <Sidebar />
      {/* Hero Component */}
      <Hero />
      {/* Submenu Component */}
      <Submenu />
    </Fragment>
  );
}

export default App;
