'use strict'
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
import { Link } from 'react-router-dom'

function NavBar({ setSignInCB }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function handleLogOut() {
      setSignInCB(false);
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
              <NavItem>
                <NavLink tag={Link} to="chat">
                  Chat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="profile">
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
            <NavLink tag={Link} to="/" onClick={handleLogOut}>
              Log Out
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;