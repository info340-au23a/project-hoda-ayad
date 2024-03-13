import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function NavBar({ signedIn, setSignInCB, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  function handleLogOut() {
    const auth = getAuth();
      signOut(auth).then(() => {
        setSignInCB(false);
        setUser('');
      }).catch((error) => {console.log(error)});
  }

  return (
    <div className="nav-bar">
      <Navbar expand="md">
        <NavbarBrand tag={Link} to="/" role='button'>
          <img src='img/logo.png' style={{'height':'1em', 'margin':'.5em'}} alt='a globe, the website logo'/>
          Campus Cloud
        </NavbarBrand>
        {signedIn && <NavbarToggler onClick={toggle} />}
        {signedIn && (<Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
              <NavItem>
                <NavLink tag={Link} to="/chat">
                  Chat
                </NavLink>
              </NavItem>
            
          </Nav>
          
            <NavLink tag={Link} to="/" onClick={handleLogOut}>
              Log Out
            </NavLink>
        
        </Collapse>)}
      </Navbar>
    </div>
  );
}

export default NavBar;
