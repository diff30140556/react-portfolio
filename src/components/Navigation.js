import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation({currentPage, handlePageChange}) {
    return (
        <Navbar className='px-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h1 className='fs-3 mb-0'>Sheon</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className={`text-center ${currentPage==='About' ? 'active' : ''}`} href="#About" onClick={() => handlePageChange('About')}>About</Nav.Link>
                    <Nav.Link className='text-center' href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                    <Nav.Link className='text-center' href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
                    <Nav.Link className='text-center' href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;