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
        // Sign-out successful.
        setSignInCB(false);
        setUser('');
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="nav-bar">
      <Navbar expand="md">
        <NavbarBrand tag={Link} to="/">
          Campus Cloud
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {signedIn && (
              <NavItem>
                <NavLink tag={Link} to="/chat">
                  Chat
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {signedIn && (
            <NavLink tag={Link} to="/" onClick={handleLogOut}>
              Log Out
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
