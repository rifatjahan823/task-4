import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" className='bg'>
          <Container>
          <Navbar.Brand as={Link} to="/">
          <h1 style={{color:"#196F3D"}}>Logo</h1>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mxx-auto">
               <Nav.Link as={Link} to='/login'>Login</Nav.Link>
               <Nav.Link  as={Link} to="/register">Register</Nav.Link>
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default Header;