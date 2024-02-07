//import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavHeader';
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <div className="container">
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
