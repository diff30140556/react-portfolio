import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';



function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Resume') {
      return <Resume />
    }
  }

  const handlePageChange = (page) => {setCurrentPage(page)};

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container>
        {renderPage()}
      </Container>
      <Footer />
    </>

  );
}

export default App;
