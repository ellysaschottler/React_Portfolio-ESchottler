import { useState } from 'react';
import Nav from './components/NavHeader'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer'


//todo implement useState to change NavHeader

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);





    return (
      <>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="mx-3">
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }