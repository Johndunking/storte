import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import storte2 from './assets/storte.png'


function CustomNavbar() {

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  
  
  return (
    <div>
    <header>
    <Navbar expand="lg" fixed="top" className='nav bg-white'>
    
      <Container className="container justify-content-left">
      <Link to="services" className="navbar-brand custom-brand" onClick={collapseNav}>
          <img src={storte2} alt="storte logo" style={{ width: '4rem' }} className='home-logo' />
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler' ref={navButton}/>
        <Navbar.Collapse id="basic-navbar-nav" ref={linksContainerRef}>
          <Nav style={{ marginLeft: 'auto' }}>
            <li className="nav-item" >
              <Link onClick={collapseNav} to="home" className="nav-link" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to="about" className="nav-link" smooth={true} duration={500}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to="services" className="nav-link" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNav} to="contact" className="nav-link" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
    </div>
  );
}

export default CustomNavbar;
