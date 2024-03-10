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

function NavBar({ setSignInCB }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  function handleLogOut() {
    setSignInCB(false);
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
            {!shouldHide && (
              <NavItem>
                <NavLink tag={Link} to="/chat">
                  Chat
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {!shouldHide && (
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
