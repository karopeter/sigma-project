import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Header.styles.scss';

const Header = ({ currentUser}) => {
   return (
    <div className="navbar">
    <div className="start">
      <Navbar className="navbar navbar-expand-lg" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#" className="logo">Sigma Pos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
             <Nav>
                 <Nav.Link className="new-trem" href="#">Transactions</Nav.Link>
                 <Nav.Link eventKey={2} href="#">
                    Withdrawals
                 </Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
        {
         currentUser
        }
      </Navbar>
    </div>
  </div>
   );
};

export default Header;