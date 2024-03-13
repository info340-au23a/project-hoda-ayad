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

  // Define an array of paths where the Chat and Log Out should be hidden
  const hideOnPaths = [
    '/set-up-basic',
    '/set-up-college',
    '/set-up-password',
    '/set-up-skills',
    '/reset-password'
  ];

  // Check if the current pathname is one of the paths to hide Chat and Log Out
  const shouldHide = hideOnPaths.includes(location.pathname);

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
